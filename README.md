# SaaS Template - Admin Dashboard React

Um template base para criar qualquer aplicação SaaS multi-tenant com React e Tailwind CSS.

## Features

### Core Features (Prontas)
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS v4** com design system completo
- **i18n** - 3 idiomas (Português, Inglês, Espanhol)
- **Dark Mode** - Tema claro/escuro
- **Multi-Tenant** - Estrutura pronta com tenant_id
- **Landing Page** - Template profissional
- **Blog** - CMS básico com posts
- **Institucional** - Sobre, FAQ, Contato, Legal
- **Dashboard** - Portal do cliente com métricas
- **Admin Panel** - Painel admin (em desenvolvimento)
- **Auth** - Login, registro, OAuth (em desenvolvimento)
- **Billing** - Stripe integração (em desenvolvimento)

### Páginas Disponíveis
- Dashboard (Home, Analytics, Marketing, CRM, Stocks, SaaS, Logistics)
- Ecommerce (Products, Billing, Invoices, Transactions)
- Suporte (Chat, Tickets)
- Email (Inbox)
- Task/Kanban
- Forms, Tables, Charts
- UI Elements (Alerts, Avatars, Badges, Buttons, etc.)
- Authentication
- E mais...

## Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| i18n | react-i18next |
| Charts | ApexCharts |
| Icons | Lucide React |

## Começando

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <SEU-REPO-URL>

# Entrar no diretório
cd dashboard-template-app-react

# Instalar dependências
npm install

# Iniciar development server
npm run dev
```

### Build para Produção

```bash
npm run build
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/            # Componentes base (Button, Badge, etc)
│   ├── layout/         # Layout (Sidebar, Header)
│   └── ...
├── pages/              # Páginas
│   ├── dashboard/      # Dashboards
│   ├── ecommerce/      # Ecommerce
│   ├── support/        # Suporte
│   └── ...
├── i18n/              # Traduções
│   └── locales/        # Arquivos de tradução
├── context/            # React Contexts
├── hooks/              # Custom Hooks
├── types/              # TypeScript types
└── utils/              # Funções utilitárias
```

## Customização

Este é um **template genérico** que pode ser adaptado para:

- SaaS de Agentes IA
- SaaS de CRM
- SaaS de E-commerce
- SaaS de Marketing
- SaaS de SEO
- Qualquer outro tipo de SaaS

Consulte o [SPEC.md](./SPEC.md) para detalhes da arquitetura e funcionalidades planejadas.

## Backend (Em Desenvolvimento)

O backend com Fastify, Prisma e autenticação está em desenvolvimento. Consulte o SPEC.md para o roadmap completo.

## Roadmap

- [x] Frontend base com React
- [x] i18n (3 idiomas)
- [x] Dark mode
- [x] Landing page
- [ ] Backend API (Fastify + Prisma)
- [ ] Autenticação (OAuth)
- [ ] Billing (Stripe)
- [ ] Admin Panel completo
- [ ] Sistema de Agentes (OpenRouter)

## Licença

MIT License

## Autor

Criado para servir como base para projetos SaaS.
