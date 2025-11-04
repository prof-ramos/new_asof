<div align="center">

# 🏛️ Portal Institucional ASOF

**Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro**

[![CI](https://github.com/seu-usuario/asof-portal/actions/workflows/ci.yml/badge.svg)](https://github.com/seu-usuario/asof-portal/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

[Site Oficial](https://www.asof.org.br) • [Documentação](./prd.md) • [Roadmap](./ROADMAP.md)

</div>

---

## 📋 Sobre o Projeto

O **Portal Institucional ASOF** é uma plataforma digital moderna e abrangente desenvolvida para:

- ✅ Modernizar a presença online da ASOF
- ✅ Fortalecer a representação da carreira de Oficial de Chancelaria
- ✅ Comunicar-se eficazmente com associados, governo, imprensa e sociedade
- ✅ Oferecer serviços digitais estruturados aos membros
- ✅ Garantir conformidade com LGPD e padrões de acessibilidade (WCAG 2.1 AA)
- ✅ Promover transparência e prestação de contas

### 🎯 Principais Funcionalidades

#### Portal Público
- **Institucional:** Quem somos, história, diretoria, estatuto
- **Carreira:** Informações sobre concursos, benefícios e processo seletivo
- **Transparência:** Prestação de contas, atas, documentos oficiais
- **Comunicação:** Central de notícias, sala de imprensa, eventos
- **Serviços:** Filiação online, contato, ouvidoria, FAQ

#### Área do Associado (Restrita)
- Autenticação segura com multi-fator
- Acesso a documentos exclusivos
- Sistema de protocolos e requerimentos
- Consulta jurídica e orientações
- Segunda via de boletos e histórico financeiro
- Carteira digital do associado

#### Painel Administrativo
- Gestão de conteúdo (CMS)
- Administração de associados
- Controle de permissões e auditoria
- Relatórios e métricas

---

## 🚀 Tecnologias Utilizadas

### Core
- **[Next.js 14+](https://nextjs.org/)** - Framework React com SSR/SSG, App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[React 18](https://react.dev/)** - Biblioteca de interface

### UI & Estilo
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes acessíveis e customizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos de UI sem estilo
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### Backend & Dados
- **[Supabase](https://supabase.com/)** - Backend as a Service
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **Autenticação própria baseada em tokens** - Gestão de sessões do portal

### DevOps & Qualidade
- **[Vercel](https://vercel.com/)** - Hospedagem e deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[Jest](https://jestjs.io/)** - Testes unitários
- **[ESLint](https://eslint.org/)** - Linting e qualidade de código

---

## 📦 Requisitos do Sistema

- **Node.js:** v18.x ou v20.x
- **npm:** v9+ ou **yarn:** v1.22+
- **PostgreSQL:** v14+ (para desenvolvimento local, opcional com Supabase)
- **Git:** v2.30+

---

## 🛠️ Configuração Local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/asof-portal.git
cd asof-portal
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/asof_portal"

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em **http://localhost:3000**

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm start` | Inicia o servidor de produção |
| `npm run lint` | Executa o linter (ESLint) |
| `npm run type-check` | Verifica tipagem TypeScript |
| `npm test` | Executa os testes (Jest) |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run ui:add` | Adiciona componente Shadcn UI |
| `npm run ui:diff` | Verifica atualizações de componentes |

---

## 📁 Estrutura do Projeto

```
asof-portal/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # Rotas de API
│   │   ├── admin/             # Painel administrativo
│   │   ├── associado/         # Área do associado
│   │   ├── institucional/     # Páginas institucionais
│   │   ├── transparencia/     # Transparência
│   │   └── layout.tsx         # Layout raiz
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Seções de página
│   │   ├── forms/             # Componentes de formulário
│   │   └── ui/                # Componentes Shadcn UI
│   ├── lib/                   # Utilitários
│   ├── hooks/                 # Custom hooks
│   ├── contexts/              # React contexts
│   ├── types/                 # Definições TypeScript
│   └── styles/                # Estilos globais
├── public/                     # Arquivos estáticos
├── .github/
│   └── workflows/             # GitHub Actions
├── prd.md                     # Documento de requisitos
├── ROADMAP.md                 # Roadmap do projeto
└── README.md                  # Este arquivo
```

---

## 🎨 Padrões de Desenvolvimento

### Componentes
- Utilizar **Server Components** por padrão
- Adicionar `'use client'` apenas quando necessário
- Preferir composição sobre configuração
- Manter componentes pequenos e focados

### Estilização
- Usar classes do **Tailwind CSS**
- Utilizar a função `cn()` para composição de classes
- Seguir convenções do **Shadcn UI**
- Garantir responsividade (mobile-first)

### TypeScript
- Tipar todas as props e funções
- Evitar uso de `any`
- Utilizar interfaces para objetos complexos
- Executar `npm run type-check` antes de commits

### Acessibilidade
- Garantir conformidade **WCAG 2.1 AA**
- Usar elementos semânticos HTML5
- Incluir labels e ARIA quando necessário
- Testar navegação por teclado
- Integrar **VLibras** para acessibilidade em Libras

---

## 🧪 Testes

Execute os testes com:

```bash
npm test
```

Para testes em modo watch:

```bash
npm run test:watch
```

**Meta de cobertura:** >80%

---

## 🚀 Deploy

O projeto está configurado para deploy automático no **Vercel** via GitHub Actions.

### Deploy Manual

```bash
npm run build
npm start
```

### Variáveis de Ambiente em Produção

Certifique-se de configurar todas as variáveis de ambiente no painel da Vercel ou seu provedor de hospedagem.

---

## 📊 Roadmap

O projeto está dividido em 3 fases principais:

### ✅ Fase 1 - Fundação (60 dias)
- Setup técnico e infraestrutura
- Portal público funcional
- Sistema de notícias/blog
- Formulário de filiação

### 🔄 Fase 2 - Serviços ao Associado (+60 dias)
- Área restrita com autenticação
- Sistema de protocolos
- Consulta jurídica
- Integração financeira
- Carteira digital

### ⏳ Fase 3 - Inteligência e Automação (+90 dias)
- Analytics avançado
- Assistente IA institucional
- Automações administrativas
- Dashboards executivos

Veja o [ROADMAP.md](./ROADMAP.md) completo para mais detalhes.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

**Diretrizes:**
- Siga os padrões de código do projeto
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Execute `npm run lint` e `npm run type-check` antes de submeter

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---

## 📞 Contato

**ASOF - Associação Nacional dos Oficiais de Chancelaria**

- 🌐 Site: [www.asof.org.br](https://www.asof.org.br)
- 📧 Email: contato@asof.org.br
- 🔒 DPO (LGPD): dpo@asof.org.br

---

## 🙏 Agradecimentos

- Todos os associados da ASOF
- Equipe de desenvolvimento
- Comunidade open source

---

<div align="center">

**Desenvolvido com 💙 para a ASOF**

*Fortalecendo a representação da carreira de Oficial de Chancelaria do Serviço Exterior Brasileiro*

</div>
