# Supabase Integration

Este projeto usa Supabase como backend para autenticação e banco de dados.

## Configuração

### 1. Variáveis de Ambiente

As variáveis de ambiente já estão configuradas no arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xtjobupmjohbhnbttsfb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

### 2. Criar a Tabela de Exemplo (Notes)

Para testar a conexão com o Supabase, execute o SQL do arquivo `supabase-setup.sql` no SQL Editor do Supabase:

1. Acesse o [Supabase Dashboard](https://supabase.com/dashboard/project/xtjobupmjohbhnbttsfb)
2. Vá para **SQL Editor**
3. Cole o conteúdo do arquivo `supabase-setup.sql`
4. Execute o SQL

Isso criará:
- Uma tabela `notes` com colunas `id`, `title` e `created_at`
- Alguns dados de exemplo
- Uma política RLS para leitura pública

### 3. Testar a Conexão

Após criar a tabela, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse http://localhost:3000/notes para ver os dados do Supabase.

## Uso

### Cliente (Client Component)

Para usar o Supabase em componentes do cliente:

```tsx
'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from('notes').select();
      setData(data);
    }
    loadData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### Servidor (Server Component)

Para usar o Supabase em componentes do servidor:

```tsx
import { createClient } from '@/utils/supabase/server';

export default async function ServerComponent() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from('notes').select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
```

### API Routes

Para usar o Supabase em rotas API:

```tsx
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { data, error } = await supabase.from('notes').select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
```

## Autenticação

O Supabase está configurado para usar autenticação baseada em cookies através do pacote `@supabase/ssr`.

### Middleware

O middleware em `src/utils/supabase/middleware.ts` atualiza automaticamente a sessão do usuário em cada requisição.

Para adicionar rotas protegidas, descomente e configure no arquivo `middleware.ts`.

## Recursos

- [Documentação do Supabase](https://supabase.com/docs)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Dashboard do Projeto](https://supabase.com/dashboard/project/xtjobupmjohbhnbttsfb)
