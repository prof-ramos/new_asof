import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { verifyPassword, generateToken, isValidEmail } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validate input
  if (!email || !password) {
    return NextResponse.json({ message: 'Email e senha são obrigatórios' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Email inválido' }, { status: 400 });
  }

  try {
    // Check if user exists
    interface User {
      id: number;
      email: string;
      full_name: string;
      role: string;
      status: string;
      password_hash: string;
      created_at: string;
      updated_at: string;
    }

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;

    if (!user || !verifyPassword(password, user.password_hash)) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }

    // Check if user is active
    if (user.status !== 'ativo') {
      return NextResponse.json({ message: 'Conta inativa' }, { status: 401 });
    }

    // Generate a new session token
    const token = generateToken();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Token expires in 7 days

    // Create session
    db.prepare(`
      INSERT INTO sessions (user_id, token, expires_at) 
      VALUES (?, ?, ?)
    `).run(user.id, token, expiresAt.toISOString());

    // Return user info (excluding password)
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        status: user.status,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}