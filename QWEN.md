# Qwen Context File - Portal Institucional ASOF

## Visão Geral do Projeto

**Produto:** Plataforma institucional e de serviços digitais  
**Cliente:** Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro (ASOF)  
**Projeto:** Portal Institucional ASOF - Uma presença digital moderna para a Associação dos Oficiais de Chancelaria do Brasil  
**Versão:** 1.0 (Novembro/2025)

Este projeto visa criar um portal institucional abrangente que modernize a presença digital da ASOF, fortaleça a representação da carreira, permita uma comunicação eficaz com diversos stakeholders e forneça serviços digitais estruturados aos associados.

## Objetivos do Projeto

### Objetivos Estratégicos
- Fortalecer a credibilidade e presença institucional da ASOF
- Tornar-se a fonte oficial de informações sobre a carreira de chancelaria
- Modernizar os serviços e atendimento aos associados
- Cumprir requisitos de transparência, acessibilidade e proteção de dados

### Metas Mensuráveis
- Aumento de 60% no tráfego orgânico em 6 meses
- Aumento de 30% nas solicitações de filiação em 12 meses
- Pontuação de acessibilidade acima de 95 (Lighthouse)
- Publicação de pelo menos 2 artigos por semana
- Alcançar 99%+ de disponibilidade

## Usuários-alvo

- **Associados Ativos:** Acesso a documentos, protocolos, jurídico, informações financeiras e notícias
- **Candidatos a Concursos:** Informações sobre a carreira, benefícios e processos seletivos
- **Gestores Públicos:** Acesso institucional, agendas, documentos oficiais
- **Imprensa:** Comunicados oficiais, contatos, sala de imprensa
- **Sociedade em Geral:** Transparência, informações institucionais, sobre o serviço exterior
- **Administradores da ASOF:** Gestão de conteúdo, associados, permissões e dados

## Escopo Funcional

### Portal Público
- **Institucional:** Página inicial, Quem Somos, Informações sobre a carreira, Transparência
- **Comunicação:** Central de notícias, Sala de imprensa, Calendário de eventos, Comunicados, Newsletter
- **Serviços:** Filiação online, Contato e ouvidoria, FAQ, Busca inteligente

### Área Restrita do Associado
- Login seguro com autenticação baseada em tokens
- Documentos exclusivos, protocolos e requerimentos
- Consulta jurídica (base de orientações), reimpressão de boletos
- Comprovantes e histórico financeiro, carteira digital do associado

### Painel Administrativo (CMS)
- Gestão de conteúdo com editor WYSIWYG
- Biblioteca de mídia, agendamento de publicações
- Gestão de associados, rastreamento de status
- Permissões baseadas em função (Admin, Editor, Financeiro, Jurídico)

### Conformidade e Governança
- Conformidade com LGPD (proteção de dados)
- Padrões de acessibilidade WCAG 2.1 AA

## Arquitetura Técnica

### Stack de Tecnologia
- **Frontend:** Next.js 14+ (SSR/SSG, SEO, performance)
- **UI:** Tailwind + Shadcn (Acessibilidade, padrões governamentais)
- **Backend:** Strapi CMS / Supabase (Flexibilidade, API REST/GraphQL)
- **Banco de dados:** PostgreSQL (Confiabilidade, ACID)
- **Autenticação:** Serviço próprio baseado em tokens (AuthProvider)
- **Hospedagem:** Vercel (Edge, Experiência de Desenvolvedor, disponibilidade)
- **CDN/Segurança:** Cloudflare (Proteção DDoS, cache, performance)
- **Monitoramento:** Sentry + Logtail (Erros, logs, alertas)

### Visão Geral da Infraestrutura
```
┌─────────────────────────────────────┐
│         Cloudflare (CDN/WAF)        │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Next.js App (Vercel Edge)      │
│  ┌──────────────────────────────┐   │
│  │  Público  │  Restrito │ CMS  │   │
│  └──────────────────────────────┘   │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     API Backend (Strapi/Node)       │
│  ┌──────────────┐  ┌─────────────┐ │
│  │ Serviço Auth │  │ Armazenamento│ │
│  └──────────────┘  └─────────────┘ │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      PostgreSQL (Supabase/AWS)      │
└─────────────────────────────────────┘
```

## Requisitos Não-Funcionais

### Performance
- Lighthouse Score: >90 em todas as categorias
- First Contentful Paint: <1.2s
- Time to Interactive: <1.8s
- Core Web Vitals: todos "Good"

### Segurança
- TLS 1.3
- Política de Segurança de Conteúdo (CSP)
- Limitação de requisições (100 req/min/IP)
- Sanitização de entradas
- Hashing de senhas (bcrypt/argon2)
- Headers de segurança (HSTS, X-Frame-Options)

### Acessibilidade
- Conformidade com WCAG 2.1 AA em 100% das páginas
- Navegação completa via teclado
- Contraste mínimo de 4.5:1
- Formulários com labels e ARIA
- Testes automatizados (axe-core)

### SEO
- Marcação Schema.org (Organization, Article, Event)
- Sitemap XML dinâmico
- Meta tags completas
- Robots.txt adequado
- URLs semânticas

## Fases do Projeto

### Fase 1 - Fundação (60 dias)
- Descoberta e planejamento (semanas 1-2)
- Design e prototipagem (semanas 3-6)
- Desenvolvimento (semanas 7-12)
- Testes e lançamento (semanas 13-14)

### Fase 2 - Serviços ao Associado (+60 dias)
- Área restrita
- Sistema de protocolos
- Consulta jurídica
- Integrações financeiras
- Carteira digital

### Fase 3 - Inteligência e Automação (+90 dias)
- Analytics avançado
- Assistente de IA institucional
- Automações administrativas
- Relatórios e dashboards
- Integrações externas

## Convenções de Desenvolvimento

### Qualidade de Código
- Manter cobertura de testes >80%
- Seguir boas práticas do Next.js e React
- Implementar tipagem TypeScript adequada
- Usar ESLint e Prettier para consistência
- Escrever documentação abrangente

### Testes
- Testes End-to-end para jornadas críticas
- Testes unitários e de integração
- Automação de testes de acessibilidade
- Testes de performance

### Documentação
- Documentação completa de APIs
- Especificações técnicas
- Manual do administrador
- Manual do usuário
- Documentação da arquitetura da informação

## Gestão de Riscos

### Riscos Identificados
- Atrasos na produção de conteúdo (mitigação: contratar redator, criar calendário)
- Resistência dos associados (mitigação: onboarding, suporte proativo, FAQs)
- Problemas de integração (mitigação: POCs técnicos, testes antecipados)
- Vazamento de dados (mitigação: segurança em camadas, auditorias, LGPD)
- Baixa adoção inicial (mitigação: campanha promocional, treinamentos)

## Critérios de Sucesso

O projeto será considerado bem-sucedido quando:
- Portal acessível, seguro e performático estiver em produção
- Conteúdo institucional completo e atualizado
- Área do associado funcional com serviços essenciais
- Conformidade com LGPD e WCAG 2.1 AA
- Equipe da ASOF treinada e autônoma na gestão
- Metas de tráfego e conversão atingidas
- Feedback positivo de associados e stakeholders

## Contexto Atual

O projeto está atualmente definido por meio do documento PRD (prd.md) que serve como especificação principal. A implementação deve seguir as diretrizes arquiteturais e stack tecnológica descritas no PRD, com foco em acessibilidade, segurança e performance.
