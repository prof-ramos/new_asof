import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.substring(7); // Remove 'Bearer ' prefix

  try {
    // Check if session exists and is not expired
    const result = db.prepare(`
      SELECT s.*, u.id, u.email, u.full_name, u.role, u.status, u.created_at, u.updated_at
      FROM sessions s 
      JOIN users u ON s.user_id = u.id 
      WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
    `).get(token) as any;

    if (!result) {
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }

    // Return user info (excluding password)
    const { password_hash, ...userWithoutPassword } = result;
    res.status(200).json({ 
      user: { 
        id: userWithoutPassword.id,
        email: userWithoutPassword.email,
        fullName: userWithoutPassword.full_name,
        role: userWithoutPassword.role,
        status: userWithoutPassword.status,
        createdAt: userWithoutPassword.created_at,
        updatedAt: userWithoutPassword.updated_at
      } 
    });
  } catch (error) {
    console.error('Verify token error:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}