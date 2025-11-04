import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { hashPassword, isValidEmail } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { email, password, fullName } = await req.json();

  // Validate input
  if (!email || !password || !fullName) {
    return NextResponse.json({ message: 'Email, senha e nome completo são obrigatórios' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Email inválido' }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ message: 'A senha deve ter pelo menos 6 caracteres' }, { status: 400 });
  }

  try {
    // Check if user already exists
    const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return NextResponse.json({ message: 'Usuário já existe' }, { status: 409 });
    }

    // Hash the password
    const passwordHash = hashPassword(password);

    // Create the user
    const result = db.prepare(`
      INSERT INTO users (email, password_hash, full_name, role, status)
      VALUES (?, ?, ?, 'associado', 'ativo')
    `).run(email, passwordHash, fullName);

    // Create associated associado record
    db.prepare(`
      INSERT INTO associados (user_id)
      VALUES (?)
    `).run(result.lastInsertRowid);

    return NextResponse.json({ message: 'Usuário criado com sucesso' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}