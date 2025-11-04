import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import { hashPassword, verifyPassword, generateToken, isValidEmail } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  try {
    // Check if user exists
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;

    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Check if user is active
    if (user.status !== 'ativo') {
      return res.status(401).json({ message: 'Conta inativa' });
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
    res.status(200).json({ 
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
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}