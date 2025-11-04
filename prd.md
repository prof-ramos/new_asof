-----

# 📘 PRD — Portal Institucional ASOF

**Produto:** Site institucional e plataforma de serviços digitais  
**Cliente:** Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro  
**Versão:** 1.0 | Data: Novembro/2025

-----

## 1. Contexto e Justificativa

A ASOF necessita modernizar sua presença digital para fortalecer a representação da carreira de Oficial de Chancelaria, comunicar-se de forma eficaz com associados, governo, imprensa e sociedade, e oferecer serviços digitais estruturados.

O portal atual não atende requisitos contemporâneos de governança, acessibilidade, segurança e experiência. Este projeto visa criar uma base sólida para comunicação institucional e prestação de serviços aos associados.

-----

## 2. Objetivos

### Objetivos Estratégicos

- Fortalecer a institucionalidade e credibilidade da ASOF
- Tornar-se fonte oficial de informação sobre a carreira
- Modernizar atendimento e serviços ao associado
- Cumprir requisitos de transparência, acessibilidade e proteção de dados

### Objetivos Mensuráveis

|Indicador                        |Meta     |Prazo     |
|---------------------------------|---------|----------|
|Tráfego orgânico                 |+60%     |6 meses   |
|Solicitações de filiação         |+30%     |12 meses  |
|Score acessibilidade (Lighthouse)|>95      |Lançamento|
|Publicações regulares            |≥2/semana|Contínuo  |
|Disponibilidade                  |99%+     |Contínuo  |

-----

## 3. Usuários

|Perfil                  |Necessidades Principais                                         |
|------------------------|----------------------------------------------------------------|
|**Associado ativo**     |Acesso a documentos, protocolos, jurídico, financeiro, notícias |
|**Candidato a concurso**|Informações sobre carreira, benefícios, processo seletivo       |
|**Gestor público**      |Acesso institucional, pautas, documentos oficiais               |
|**Imprensa**            |Notas oficiais, contatos, sala de imprensa                      |
|**Sociedade**           |Transparência, institucional, informações sobre serviço exterior|
|**Administrador ASOF**  |Gestão de conteúdo, associados, permissões, dados               |

-----

## 4. Escopo Funcional

### 4.1 Portal Público

**Institucional**

- Homepage
- Quem somos (história, missão, diretoria, estatuto)
- A carreira de Oficial de Chancelaria
- Concursos e seleções
- Transparência (prestação de contas, atas, documentos)

**Comunicação**

- Central de notícias
- Sala de imprensa
- Calendário de eventos
- Comunicados oficiais
- Newsletter

**Serviços**

- Filiação online
- Contato e ouvidoria
- FAQ
- Busca inteligente

### 4.2 Área do Associado (restrita)

**Acesso**

- Login seguro com autenticação multifator
- Recuperação de senha
- Perfil editável

**Serviços**

- Documentos exclusivos
- Protocolos e requerimentos
- Consulta jurídica (base de orientações)
- Segunda via de boletos
- Comprovantes e histórico financeiro
- Carteira digital do associado

### 4.3 Painel Administrativo (CMS)

**Gestão de Conteúdo**

- Editor WYSIWYG para páginas e notícias
- Biblioteca de mídia
- Agendamento de publicações
- Categorização e tags

**Gestão de Associados**

- Cadastro e atualização
- Status de filiação
- Histórico de interações
- Exportação de relatórios

**Permissões**

- Roles: Admin, Editor, Financeiro, Jurídico
- Logs de auditoria
- Controle de acesso granular

### 4.4 Conformidade e Governança

**LGPD**

- Banner de consentimento
- Política de privacidade
- Canal DPO
- Gestão de consentimentos
- Portabilidade e exclusão de dados

**Acessibilidade**

- WCAG 2.1 nível AA
- VLibras integrado
- Navegação por teclado
- Alto contraste
- Textos alternativos

-----

## 5. Fora de Escopo (Fase 1)

- Aplicativo mobile nativo
- Fórum ou rede social interna
- E-commerce
- Sistema de votação eletrônica
- Chatbot com IA
- Integração com sistemas legados do Itamaraty

*Estes itens podem ser avaliados para fases futuras.*

-----

## 6. Arquitetura Técnica

### Stack Tecnológica

|Camada           |Tecnologia           |Justificativa                  |
|-----------------|---------------------|-------------------------------|
|**Frontend**     |Next.js 14+          |SSR/SSG, SEO, performance      |
|**UI**           |Tailwind + Shadcn    |Acessibilidade, padrões gov    |
|**Backend**      |Strapi CMS / Supabase|Flexibilidade, API REST/GraphQL|
|**Banco**        |PostgreSQL           |Confiabilidade, ACID           |
|**Auth**         |Clerk / Auth.js      |Segurança, compliance          |
|**Hospedagem**   |Vercel               |Edge, DX, disponibilidade      |
|**CDN/Security** |Cloudflare           |DDoS, cache, performance       |
|**Monitoramento**|Sentry + Logtail     |Erros, logs, alertas           |

### Infraestrutura

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
│  │ Auth Service │  │ File Storage│ │
│  └──────────────┘  └─────────────┘ │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      PostgreSQL (Supabase/AWS)      │
└─────────────────────────────────────┘
```

-----

## 7. Requisitos Não-Funcionais

### Performance

- Lighthouse Score: >90 em todas as categorias
- First Contentful Paint: <1.2s
- Time to Interactive: <1.8s
- Core Web Vitals: todos “Good”

### Segurança

- TLS 1.3
- Content Security Policy (CSP)
- Rate limiting (100 req/min/IP)
- Sanitização de inputs
- Hashing de senhas (bcrypt/argon2)
- Headers de segurança (HSTS, X-Frame-Options)

### Acessibilidade

- WCAG 2.1 AA em 100% das páginas
- Navegação completa via teclado
- Contraste mínimo 4.5:1
- Formulários com labels e ARIA
- Testes automatizados (axe-core)

### SEO

- [Schema.org](http://Schema.org) (Organization, Article, Event)
- Sitemap XML dinâmico
- Meta tags completas
- Robots.txt adequado
- URLs semânticas

### Backup e Recuperação

- Backup diário automático (retenção 30 dias)
- Backup semanal (retenção 6 meses)
- RPO: 24h | RTO: 4h
- Testes trimestrais de recuperação

-----

## 8. Critérios de Aceitação

### Gerais

- [ ] Navegação intuitiva sem links quebrados
- [ ] Design responsivo (mobile, tablet, desktop)
- [ ] Tempo de carregamento <2s (3G)
- [ ] Formulários validados e com feedback
- [ ] Mensagens de erro claras e orientadoras

### Conteúdo

- [ ] Textos revisados pela diretoria
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Documentos em formatos acessíveis (PDF/A, HTML)
- [ ] Vídeos com legendas e transcrições

### Técnicos

- [ ] Testes E2E nas jornadas críticas
- [ ] Coverage de testes >80%
- [ ] Logs estruturados e centralizados
- [ ] Alertas configurados (downtime, erros críticos)
- [ ] Documentação técnica completa

-----

## 9. Entregáveis

### Documentação

1. Arquitetura da informação (mapa do site)
1. Especificações técnicas
1. Manual do administrador
1. Manual do usuário
1. Políticas de uso e governança

### Design

1. Design system institucional
1. Wireframes (desktop, tablet, mobile)
1. Protótipo navegável (Figma/Penpot)
1. Guia de identidade digital

### Desenvolvimento

1. Portal público funcional
1. Área restrita do associado
1. Painel administrativo (CMS)
1. Integração com sistemas de pagamento
1. Documentação de APIs

### Governança

1. Política de privacidade
1. Termos de uso
1. Procedimentos LGPD
1. Plano de continuidade

-----

## 10. Cronograma

### Fase 1 — Fundação (60 dias)

**Semanas 1-2:** Descoberta e planejamento

- Levantamento de requisitos
- Arquitetura da informação
- Wireframes

**Semanas 3-6:** Design e prototipagem

- Design system
- Protótipo de alta fidelidade
- Validação com stakeholders

**Semanas 7-12:** Desenvolvimento

- Setup técnico
- Portal público
- Blog/notícias
- Formulário de filiação
- CMS básico

**Semanas 13-14:** Testes e lançamento

- Testes de QA
- Correções
- Treinamento equipe
- Go-live

### Fase 2 — Serviços ao Associado (+60 dias)

- Área restrita
- Sistema de protocolos
- Consulta jurídica
- Integração financeira
- Carteira digital

### Fase 3 — Inteligência e Automação (+90 dias)

- Analytics avançado
- Assistente IA institucional
- Automações administrativas
- Relatórios e dashboards
- Integrações externas

-----

## 11. Riscos e Mitigações

|Risco                         |Probabilidade|Impacto|Mitigação                             |
|------------------------------|-------------|-------|--------------------------------------|
|Atraso na produção de conteúdo|Alta         |Médio  |Contratar redator, criar calendário   |
|Resistência de associados     |Média        |Médio  |Onboarding, suporte proativo, FAQs    |
|Problemas de integração       |Média        |Alto   |POCs técnicas, testes antecipados     |
|Vazamento de dados            |Baixa        |Alto   |Segurança em camadas, auditorias, LGPD|
|Baixa adoção inicial          |Média        |Médio  |Campanha de divulgação, treinamentos  |

-----

## 12. Governança do Projeto

### Equipe

|Papel                     |Responsabilidade             |
|--------------------------|-----------------------------|
|**Product Owner**         |Diretoria ASOF               |
|**Gerente de Projeto**    |Coordenação geral            |
|**Tech Lead**             |Arquitetura e desenvolvimento|
|**UX/UI Designer**        |Design e experiência         |
|**Desenvolvedor Frontend**|Interface e interações       |
|**Desenvolvedor Backend** |API e integrações            |
|**QA**                    |Testes e qualidade           |
|**Redator**               |Conteúdo institucional       |

### Comunicação

- Reuniões semanais de status
- Sprint reviews quinzenais
- Documentação em repositório centralizado
- Canal dedicado (Slack/Teams)

-----

## 13. Critério de Sucesso

O projeto será considerado bem-sucedido quando:

✅ Portal acessível, seguro e performático em produção  
✅ Conteúdo institucional completo e atualizado  
✅ Área do associado funcional com serviços essenciais  
✅ Conformidade com LGPD e WCAG 2.1 AA  
✅ Equipe ASOF treinada e autônoma na gestão  
✅ Metas de tráfego e conversão atingidas  
✅ Feedback positivo de associados e stakeholders

**A ASOF terá um portal institucional moderno, confiável e alinhado ao padrão de excelência do Serviço Exterior Brasileiro, fortalecendo a representação da carreira e a entrega de valor aos associados.**

-----

**Aprovações:**

-----

Diretoria ASOF

-----

Gerente de Projeto

-----

Tech Lead

-----

*Documento vivo — versão controlada no repositório do projeto*