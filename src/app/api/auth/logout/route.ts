import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: 'Token é obrigatório' }, { status: 400 });
  }

  try {
    // Delete the session
    const result = db.prepare('DELETE FROM sessions WHERE token = ?').run(token);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'Token inválido ou expirado' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Logout realizado com sucesso' });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}