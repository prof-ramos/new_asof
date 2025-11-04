import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Token não fornecido' }, { status: 401 });
  }

  const token = authHeader.substring(7); // Remove 'Bearer ' prefix

  try {
    interface SessionResult {
      id: number;
      user_id: number;
      token: string;
      expires_at: string;
      created_at: string;
      id: number;
      email: string;
      full_name: string;
      role: string;
      status: string;
      password_hash: string;
      created_at: string;
      updated_at: string;
    }

    // Check if session exists and is not expired
    const result = db.prepare(`
      SELECT s.*, u.id, u.email, u.full_name, u.role, u.status, u.created_at, u.updated_at
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
    `).get(token) as SessionResult | undefined;

    if (!result) {
      return NextResponse.json({ message: 'Token inválido ou expirado' }, { status: 401 });
    }

    // Return user info (excluding password)
    return NextResponse.json({
      user: {
        id: result.id,
        email: result.email,
        fullName: result.full_name,
        role: result.role,
        status: result.status,
        createdAt: result.created_at,
        updatedAt: result.updated_at
      }
    });
  } catch (error) {
    console.error('Verify token error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}