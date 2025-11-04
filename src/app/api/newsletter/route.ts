import { NextResponse } from 'next/server';
import { z } from 'zod';

import { createClient } from '@/utils/supabase/server';

const payloadSchema = z.object({
  email: z.string().email('Informe um e-mail válido.'),
  segmentos: z.array(z.string()).default([]),
  consentLgpd: z.boolean().refine((val) => val, 'O consentimento LGPD é obrigatório.'),
  origem: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ message: 'Payload inválido.' }, { status: 400 });
  }

  const parse = payloadSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json(
      {
        message: 'Não foi possível validar os dados enviados.',
        errors: parse.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parse.data;
  const supabase = await createClient();

  const { error } = await supabase
    .from('newsletter_subscriptions')
    .upsert(
      {
        email: data.email.toLowerCase(),
        segments: data.segmentos,
        consent_lgpd: data.consentLgpd,
        consent_timestamp: new Date().toISOString(),
        source: data.origem ?? 'newsletter-page',
      },
      { onConflict: 'email' },
    );

  if (error) {
    console.error('Erro ao registrar newsletter:', error);
    return NextResponse.json(
      {
        message: 'Não foi possível registrar sua inscrição no momento.',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
