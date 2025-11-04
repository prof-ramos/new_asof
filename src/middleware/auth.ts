import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export function verifyAuth(token: string) {
  try {
    // Check if session exists and is not expired
    const session = db.prepare(`
      SELECT s.*, u.* 
      FROM sessions s 
      JOIN users u ON s.user_id = u.id 
      WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
    `).get(token) as any;

    if (!session) {
      return null;
    }

    return {
      id: session.id,
      email: session.email,
      fullName: session.full_name,
      role: session.role,
      status: session.status,
      createdAt: session.created_at,
      updatedAt: session.updated_at
    };
  } catch (error) {
    console.error('Auth verification error:', error);
    return null;
  }
}

export function authMiddleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value || 
                request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return null;
  }

  return verifyAuth(token);
}

export async function GET(request: NextRequest) {
  const user = authMiddleware(request);
  
  if (!user) {
    return NextResponse.json({ message: 'Não autenticado' }, { status: 401 });
  }
  
  return NextResponse.json({ user });
}