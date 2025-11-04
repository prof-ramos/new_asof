import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import { hashPassword, isValidEmail } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, password, fullName } = req.body;

  // Validate input
  if (!email || !password || !fullName) {
    return res.status(400).json({ message: 'Email, senha e nome completo são obrigatórios' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres' });
  }

  try {
    // Check if user already exists
    const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(409).json({ message: 'Usuário já existe' });
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

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}