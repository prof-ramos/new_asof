import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token é obrigatório' });
  }

  try {
    // Delete the session
    const result = db.prepare('DELETE FROM sessions WHERE token = ?').run(token);

    if (result.changes === 0) {
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }

    res.status(200).json({ message: 'Logout realizado com sucesso' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}