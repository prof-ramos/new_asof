import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { hashPassword, verifyPassword, generateToken, isValidEmail } from '@/lib/auth';

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
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;

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
    const { password_hash, ...userWithoutPassword } = user;
    return NextResponse.json({
      user: {
        id: userWithoutPassword.id,
        email: userWithoutPassword.email,
        fullName: userWithoutPassword.full_name,
        role: userWithoutPassword.role,
        status: userWithoutPassword.status,
        createdAt: userWithoutPassword.created_at,
        updatedAt: userWithoutPassword.updated_at
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}