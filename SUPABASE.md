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

## Sistema de Associados

### Estrutura do Banco de Dados

O sistema possui uma tabela completa `associados` baseada na planilha de controle da ASOF. Para criar a estrutura:

1. Acesse o [SQL Editor do Supabase](https://supabase.com/dashboard/project/xtjobupmjohbhnbttsfb/sql/new)
2. Execute o arquivo `supabase-associados.sql`

Este arquivo criará:
- Tabela `associados` com 40+ campos
- Índices otimizados para busca rápida
- Views úteis (associados_ativos, estatisticas_associados, associados_por_lotacao)
- Políticas de RLS (Row Level Security)
- Funções auxiliares (buscar, calcular idade, etc.)
- Triggers para atualização automática de timestamps
- Dados de exemplo (3 associados)

### Campos da Tabela Associados

**Dados Pessoais:**
- nome, sexo, email, naturalidade, uf_naturalidade
- estado_civil, numero_dependentes, dependentes (JSON)

**Documentação:**
- data_nascimento, cpf, rg, uf_rg, orgao_expedidor, data_expedicao_rg

**Endereço:**
- endereco, cidade, uf_residencia, bairro, cep, pais

**Contatos:**
- telefone, celular, fax

**Dados Funcionais:**
- matricula_siape, ceoc, caoc, data_admissao, data_posse
- origem, lotacao, data_lotacao, missao

**Associação:**
- associado, data_adesao, licenca, data_licenca, data_cancelamento

**Profissionais:**
- classe_padrao, convenios (JSON)

### Tipos TypeScript

O arquivo `src/types/associado.ts` contém:
- Interface `Associado` completa
- Tipos auxiliares (Sexo, EstadoCivil, Origem, etc.)
- Funções de validação (CPF, email)
- Funções de formatação (CPF, CEP, telefone)
- Funções auxiliares (calcular idade, tempo de associação)

### Página de Administração

Acesse `/admin/associados` para visualizar:
- Lista completa de associados
- Estatísticas (total, ativos, inativos, lotações)
- Tabela com informações principais
- Status de cada associado

### Exemplo de Uso

```tsx
import { createClient } from '@/utils/supabase/server';
import { Associado } from '@/types/associado';

// Buscar todos os associados ativos
const { data: associados } = await supabase
  .from('associados')
  .select('*')
  .eq('associado', true)
  .is('data_cancelamento', null)
  .order('nome');

// Buscar por nome
const { data } = await supabase
  .from('associados')
  .select('*')
  .ilike('nome', '%Silva%');

// Buscar estatísticas
const { data: stats } = await supabase
  .from('estatisticas_associados')
  .select('*')
  .single();
```

### Views Disponíveis

1. **associados_ativos**: Apenas associados ativos com campos principais
2. **estatisticas_associados**: Estatísticas gerais do sistema
3. **associados_por_lotacao**: Distribuição por lotação

### Importação de Dados

Para importar dados de uma planilha Excel:

1. Exporte a planilha para CSV
2. Use a interface do Supabase (Table Editor > Import)
3. Ou crie um script de migração SQL

## Recursos

- [Documentação do Supabase](https://supabase.com/docs)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Dashboard do Projeto](https://supabase.com/dashboard/project/xtjobupmjohbhnbttsfb)
