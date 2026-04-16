# SPEC.md - Template SaaS Genérico (v2)

## 1. Conceito & Visão

**Nome do Projeto:** (definido ao criar aplicação específica)

**Tipo:** Template Base para SaaS Multi-Tenant

**Proposta de Valor:** Fornecer uma base sólida e customizável para criar qualquer aplicação SaaS online (SEO, E-commerce, CRM, IA, Marketing, etc.) com todas as funcionalidades essenciais já implementadas.

**Este é um TEMPLATE, não um produto final.** O que está aqui é a BASE que pode ser adaptada.

---

## 2. O que é CORE (sempre incluso)

Funcionalidades que **todo** SaaS precisa:

| Módulo | Descrição |
|--------|-----------|
| **Auth** | Login, registro, OAuth (Google, GitHub, Microsoft) |
| **Multi-Tenant** | Isolamento de dados por cliente (tenant_id) |
| **Billing** | Stripe para cobranças (planos, assinaturas) |
| **Admin Panel** | Painel para o admin gerenciar clientes |
| **Users** | CRUD de usuários com roles (super_admin, admin, user) |
| **API Keys** | Gerenciamento de chaves de API |
| **i18n** | 3 idiomas (Português, Inglês, Espanhol) |
| **Dark Mode** | Tema claro/escuro |
| **Landing** | Página inicial com CTA |
| **Blog** | CMS para posts |
| **Institutional** | Sobre, Preços, FAQ, Contato, Legal |

---

## 3. O que é CUSTOMIZÁVEL

Funcionalidades que **variam** conforme o tipo de SaaS:

| Tipo de SaaS | Features Específicas |
|--------------|---------------------|
| **E-commerce** | Produtos, Carrinho, Pedidos, Inventory |
| **CRM** | Leads, Pipelines, Contatos, Deals |
| **IA/Agentes** | Agents, Chat, Knowledge Base, Tools |
| **Marketing** | Campanhas, Analytics, Automação |
| **SEO** | Keywords, Rankings, Audits, Backlinks |
| **Projetos** | Tasks, Kanban, Milestones, Time tracking |
| **Education** | Cursos, Alunos, Certificados |
| **E etc** | Qualquer tipo de SaaS |

---

## 4. Planos e Preços

**A DEFINIR** - Planos e preços serão definidos ao criar uma aplicação específica, não no template.

O template fornece:
- [ ] Estrutura de planos no banco de dados
- [ ] Integração Stripe pronta
- [ ] Rate limiting por plano configurável

---

## 5. Arquitetura Base

```
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE SAAS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐   │
│  │                    CORE (sempre igual)              │   │
│  │                                                       │   │
│  │  • Auth (NextAuth/Lucia)                            │   │
│  │  • Multi-Tenant (tenant_id)                         │   │
│  │  • Billing (Stripe)                                 │   │
│  │  • Admin Panel                                     │   │
│  │  • Users & Roles                                   │   │
│  │  • API Keys                                        │   │
│  │  • i18n (3 idiomas)                               │   │
│  │  • Dark Mode                                       │   │
│  └────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌────────────────────────────────────────────────────┐   │
│  │              CUSTOMIZÁVEL (por aplicação)            │   │
│  │                                                       │   │
│  │  • Entidades (Products, Leads, Agents, etc)         │   │
│  │  • CRUD específico                                  │   │
│  │  • Dashboard de métricas                           │   │
│  │  • Integrações (APIs externas)                     │   │
│  │  • Ferramentas específicas                        │   │
│  └────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Design Language (Core)

```
Primary:     #465FFF (brand-500)
Secondary:   #1a2231 (boxdark)
Accent:      #12B76A (success-500)
Background:  #F9FAFB (gray-50)
Text:        #101828 (gray-900)
Dark Mode:   #0c111d (gray-950)

Headings:    Satoshi
Body:        Inter
```

---

## 7. Stack Tecnológico (Core)

| Camada | Tecnologia |
|--------|------------|
| Frontend | React + Tailwind + Vite ✅ |
| Backend API | Node.js + Fastify |
| Database | MySQL (Hostinger) |
| ORM | Prisma |
| Auth | NextAuth.js ou Lucia Auth |
| Billing | Stripe (integração pronta) |
| LLM | OpenRouter SDK (opcional) |
| i18n | react-i18next ✅ |
| State | Zustand |
| Deploy | VPS Hostinger + PM2 |

---

## 8. Database Schema (Core)

```sql
-- TENANTS (clientes)
tenants (
  id                  UUID PRIMARY KEY,
  name                VARCHAR(255),
  subdomain           VARCHAR(100) UNIQUE,
  plan                ENUM('free', 'pro', 'enterprise'),
  stripe_customer_id   VARCHAR(255),
  is_active           BOOLEAN DEFAULT true,
  created_at          TIMESTAMP,
  updated_at          TIMESTAMP
)

-- USERS
users (
  id                  UUID PRIMARY KEY,
  tenant_id           UUID REFERENCES tenants(id),
  email               VARCHAR(255) UNIQUE,
  password            VARCHAR(255),
  name                VARCHAR(255),
  role                ENUM('super_admin', 'admin', 'user'),
  avatar              VARCHAR(500),
  provider            ENUM('email', 'google', 'github', 'microsoft'),
  provider_id         VARCHAR(255),
  is_active           BOOLEAN DEFAULT true,
  created_at          TIMESTAMP,
  updated_at          TIMESTAMP
)

-- SUBSCRIPTIONS
subscriptions (
  id                      UUID PRIMARY KEY,
  tenant_id               UUID REFERENCES tenants(id),
  plan                    ENUM('free', 'pro', 'enterprise'),
  status                  ENUM('active', 'canceled', 'past_due'),
  stripe_subscription_id   VARCHAR(255),
  current_period_end       TIMESTAMP,
  created_at              TIMESTAMP,
  updated_at              TIMESTAMP
)

-- API KEYS
api_keys (
  id              UUID PRIMARY KEY,
  tenant_id       UUID REFERENCES tenants(id),
  name            VARCHAR(255),
  key_hash        VARCHAR(255),
  permissions     JSON,
  is_active       BOOLEAN DEFAULT true,
  last_used_at    TIMESTAMP,
  created_at      TIMESTAMP,
  expires_at      TIMESTAMP
)

-- USAGE (rate limiting)
usage (
  id              UUID PRIMARY KEY,
  tenant_id       UUID REFERENCES tenants(id),
  month           INTEGER,
  year            INTEGER,
  messages_used   INTEGER DEFAULT 0,
  tokens_used     BIGINT DEFAULT 0,
  UNIQUE(tenant_id, month, year)
)
```

---

## 9. Funcionalidades Core

### 9.1 Autenticação
- [x] Email/senha
- [x] OAuth: Google, GitHub, Microsoft
- [x] Roles: super_admin, admin, user
- [x] Middleware de tenant

### 9.2 Billing
- [ ] Integração Stripe (a implementar)
- [ ] Planos configuráveis
- [ ] Webhooks
- [ ] Proteção de rotas por plano

### 9.3 Admin Panel
- [ ] Dashboard com métricas
- [ ] Gerenciar clientes
- [ ] Ver assinaturas
- [ ] API Keys
- [ ] Configurações

### 9.4 Frontend
- [ ] Landing Page ✅ (template atual)
- [ ] Blog ✅ (template atual)
- [ ] Institucional ✅ (template atual)
- [ ] Portal do Cliente ✅ (template atual)

---

## 10. Como Customizar

### Passo 1: Definir o tipo de SaaS
```
Ex: "Vou criar um SaaS de CRM para imobiliárias"
```

### Passo 2: Adicionar entidades
```
Entidades CRM:
- contacts
- properties
- deals
- appointments
- documents
```

### Passo 3: Criar CRUD
```
/api/contacts
/api/properties
/api/deals
...
```

### Passo 4: Customizar Dashboard
```
Dashboard do Cliente:
- Total de contacts
- Deals em aberto
- Properties disponíveis
- Próximos appointments
```

### Passo 5: Adicionar features específicas
```
- Importar contatos CSV
- Integração com portais imobiliários
- E-mail marketing
- etc
```

---

## 11. Checklist de Implementação

### Fase 1: Setup (1 dia)
- [ ] Configurar VPS
- [ ] Setup MySQL
- [ ] SSL

### Fase 2: Backend Core (3-5 dias)
- [ ] Fastify + Prisma
- [ ] Auth (email + OAuth)
- [ ] Multi-tenant middleware
- [ ] CRUD users

### Fase 3: Billing (2-3 dias)
- [ ] Stripe Checkout
- [ ] Webhooks
- [ ] Planos

### Fase 4: Admin Panel (3-5 dias)
- [ ] Dashboard
- [ ] Clientes
- [ ] Assinaturas
- [ ] API Keys

### Fase 5: Frontend Core (3-5 dias)
- [ ] Landing Page
- [ ] Blog
- [ ] Institucional
- [ ] Portal Cliente

### Fase 6: Customização (vária)
- [ ] Adicionar entidades
- [ ] CRUD específico
- [ ] Features customizadas

---

## 12. Estrutura de Pastas

```
/
├── src/
│   ├── api/                    # Backend API
│   │   ├── routes/             # Rotas da API
│   │   ├── middleware/         # Auth, tenant
│   │   ├── services/           # Lógica de negócio
│   │   └── plugins/           # Plugins Fastify
│   │
│   ├── components/             # Componentes UI
│   │   ├── ui/                # Componentes base
│   │   └── layout/            # Layout
│   │
│   ├── pages/                  # Páginas
│   │   ├── landing/            # Landing page
│   │   ├── blog/              # Blog
│   │   ├── institutional/      # Institucional
│   │   ├── dashboard/          # Portal cliente
│   │   └── admin/             # Painel admin
│   │
│   ├── features/               # Features customizáveis
│   │   ├── crm/                # Ex: CRM module
│   │   ├── ecommerce/           # Ex: E-commerce module
│   │   ├── agents/             # Ex: AI Agents module
│   │   └── .../               # etc
│   │
│   ├── hooks/
│   ├── contexts/
│   ├── services/
│   └── i18n/
│
├── prisma/
│   └── schema.prisma
│
└── scripts/
```

---

## 13. Resumo

| Item | Status |
|------|--------|
| **Template** | ✅ Pronto |
| **Core funcionalidades** | ✅ Implementar |
| **Planos e Preços** | ❌ A definir (por aplicação) |
| **Customizável para** | Qualquer SaaS |
| **Flexível** | Sim |
| **Extensível** | Sim |

---

**FIM DO SPEC.md**
