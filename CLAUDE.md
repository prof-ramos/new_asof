# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The ASOF Portal is an institutional website for the National Association of Chancellery Officers of the Brazilian Foreign Service. It's built with Next.js 14+ as a comprehensive digital platform to modernize ASOF's online presence, strengthen career representation, and provide digital services to members.

**Key Objectives:**
- Strengthen institutional credibility and transparency
- Provide member services (restricted area with authentication)
- Ensure LGPD compliance and WCAG 2.1 AA accessibility
- Achieve Lighthouse score >95 across all categories

## Development Commands

### Core Commands
```bash
npm run dev           # Start development server (http://localhost:3000)
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run ESLint
npm run type-check    # TypeScript type checking
npm test              # Run Jest tests
npm run test:watch    # Run tests in watch mode
```

### Shadcn UI Components
```bash
npm run ui:add        # Add new shadcn-ui component
npm run ui:diff       # Check for component updates
```

## Technology Stack

- **Frontend:** Next.js 14+ (App Router, SSR/SSG)
- **UI Framework:** Tailwind CSS + Shadcn UI components
- **Authentication:** AuthProvider com sessões baseadas em token
- **Icons:** React Feather, Lucide React, Feather Icons
- **Database:** PostgreSQL (via Supabase)
- **Hosting:** Vercel (Edge Network)
- **Styling Utilities:** `clsx` + `tailwind-merge` (via `cn()` utility)

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── api/               # API routes
│   ├── admin/             # Admin panel routes
│   ├── associado/         # Member area (restricted)
│   ├── auth/              # Authentication pages
│   ├── institucional/     # Institutional pages
│   ├── transparencia/     # Transparency/accountability
│   ├── carreira/          # Career information
│   ├── concursos/         # Public examinations
│   ├── contato/           # Contact page
│   ├── dpo/               # Data Protection Officer contact
│   ├── faq/               # Frequently Asked Questions
│   ├── lgpd/              # LGPD privacy policy
│   ├── ouvidoria/         # Ombudsman
│   └── layout.tsx         # Root layout with Header/Footer
├── components/
│   ├── layout/            # Header, Footer components
│   ├── sections/          # Page section components
│   ├── forms/             # Form components
│   └── ui/                # Shadcn UI components
├── lib/                   # Utility functions (e.g., cn() for className merging)
├── hooks/                 # Custom React hooks
├── contexts/              # React contexts
├── providers/             # Provider components
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── assets/                # Static assets
└── styles/                # Global styles
```

### Key Architectural Patterns

**App Router Structure:**
- All pages use Next.js 14 App Router (`src/app/`)
- Layouts define shared UI structure (e.g., `src/app/layout.tsx` wraps all pages with Header/Footer)
- Server and Client Components are explicitly separated (Client components use `'use client'` directive)

**Authentication Flow:**
- `AuthProvider` (context client-side) gerencia sessões usando tokens emitidos pelos endpoints `/api/auth/*`
- O layout raiz envolve toda a aplicação com `AuthProvider`, garantindo acesso ao estado de autenticação
- Áreas restritas devem validar tokens ativos; páginas públicas permanecem acessíveis sem login

**Component Organization:**
- UI components from Shadcn are in `src/components/ui/`
- Layout components (Header, Footer) are in `src/components/layout/`
- Use the `cn()` utility from `src/lib/utils.ts` for conditional className merging

**Header Navigation:**
- Responsive header with dropdown menus for Institucional, Carreira, and Transparência
- Authenticated users see saudação com botão "Sair"; visitantes veem botão "Acessar"
- Mobile menu with hamburger toggle

## Environment Configuration

Copy `.env.example` to `.env.local` and configure:

**Required for Development:**
- `NEXT_PUBLIC_SITE_URL` - Site URL (default: http://localhost:3000)
- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase backend
- Autenticação utiliza tokens internos — nenhuma variável adicional necessária no momento

**Optional Integrations:**
- Google Analytics, Sentry (monitoring)
- Cloudinary (media storage)
- Stripe (payments)
- SMTP (email)

## Development Guidelines

### Styling
- Use Tailwind CSS utility classes
- Leverage Shadcn UI components for consistent design
- Always use the `cn()` utility for conditional className composition
- Maintain responsive design (mobile-first approach)

### Accessibility & Compliance
- All pages must meet WCAG 2.1 AA standards
- Use semantic HTML and proper ARIA labels
- Ensure keyboard navigation works throughout
- VLibras integration required for Brazilian accessibility
- LGPD compliance: consent banners, privacy policy, data portability

### Performance Targets
- Lighthouse Score: >90 all categories
- First Contentful Paint: <1.2s
- Time to Interactive: <1.8s
- Use `next/image` for optimized images (WebP/AVIF formats configured)

### Security
- Content Security Policy (CSP) headers configured
- Rate limiting: 100 req/min/IP
- HTTPS-only (TLS 1.3)
- Sanitize all user inputs
- Avoid exposing sensitive data in client-side code

## Testing

Tests use Jest with `jest-environment-jsdom`. Configuration should cover:
- Unit tests for utilities and components
- Integration tests for page flows
- Target coverage >80%

## Project Phases

**Current Phase: Phase 1 - Foundation (60 days)**
- ✅ Discovery and planning complete
- 🔄 Design and prototyping in progress
- ⏳ Development of public portal
- ⏳ Basic CMS setup

**Upcoming:**
- Phase 2: Member services (restricted area, protocols, digital wallet)
- Phase 3: Intelligence and automation (analytics, AI assistant)

## Important Notes

- This is a **Portuguese-language** institutional site (`lang="pt-BR"`)
- The project follows Brazilian government digital standards
- All content must be reviewed by ASOF board before publication
- Backup strategy: Daily backups (30 days retention), weekly backups (6 months retention)
- Deployment targets Vercel with Cloudflare CDN

## References

- PRD: See `prd.md` for comprehensive product requirements
- Roadmap: See `ROADMAP.md` for project phases and milestones
- README: See `README.md` for general project information
