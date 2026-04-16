---
name: opencode-app
description: Full-stack template para aplicações com agentes de IA. React + Vite + Express + Prisma + Tailwind CSS v4 com Design System TailAdmin.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# OpenCode App Template

Template completo para criar aplicações web com agentes de IA.

## Tech Stack

| Layer | Tech | Versão |
|-------|------|--------|
| Frontend | React + Vite | 19.x / 8.x |
| Styling | Tailwind CSS | 4.x |
| Backend | Express | 5.x |
| ORM | Prisma | 7.x |
| Database | SQLite | - |
| Validation | Zod | 4.x |
| Logging | Pino | 10.x |

## Quando Usar

- Dashboards administrativos com IA
- Aplicações de chatbot
- Painéis de controle para agentes
- APIs REST + frontend React

## Estrutura

```
meu-projeto/
├── my-app/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css          # Design tokens
│   └── package.json
│
├── my-api/                    # Backend (Express)
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── _referencia-tailadmin/     # Template UI referência
├── templates/                 # Templates de documentação
├── docs/                      # Guias
└── .agent/                    # Configurações dos agentes
```

## Quick Start

```bash
# 1. Clone e configure
git clone https://github.com/seu-usuario/opencode-app-template.git meu-projeto
cd meu-projeto

# 2. Instale dependências
cd my-app && npm install
cd ../my-api && npm install

# 3. Configure banco
cd my-api
npx prisma generate
npx prisma db push

# 4. Inicie os servidores
# Terminal 1: npm run dev (API - porta 3000)
# Terminal 2: cd ../my-app && npm run dev (Frontend - porta 5173)
```

## Design System

O template usa TailAdmin v2.0.1 com Tailwind CSS v4:

### Tokens em `my-app/src/index.css`
```css
@theme {
  --color-brand-500: #465fff;
  --color-gray-50: #f9fafb;
  --font-outfit: Outfit, sans-serif;
  /* ... todos os tokens */
}
```

### Dark Mode
```tsx
<html className="dark">
  {/* Componentes adaptam automaticamente */}
</html>
```

## Componentes

Consulte `.antigravity/tailadmin-docs.md` para todos os componentes disponíveis.

### Uso de Componentes
```tsx
// Botão
<button className="rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
  Clique aqui
</button>

// Card
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-dark">
  Conteúdo
</div>

// Input
<input 
  type="text" 
  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-brand-500 focus:outline-none dark:border-gray-800"
  placeholder="Digite algo..."
/>
```

## API

### Endpoints Criados

| Method | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/health` | Health check |
| GET | `/api/users` | Listar usuários |
| GET | `/api/users/:id` | Buscar usuário |
| POST | `/api/users` | Criar usuário |
| PUT | `/api/users/:id` | Atualizar usuário |
| DELETE | `/api/users/:id` | Deletar usuário |

### Adicionando Nova Rota

```ts
// my-api/src/routes/produtoRoutes.ts
import { Router } from 'express';

const router = Router();

router.get('/produtos', (req, res) => {
  // implementação
});

export default router;

// my-api/src/server.ts
import produtoRoutes from './routes/produtoRoutes';
app.use('/api', produtoRoutes);
```

## Agentes

O template inclui skills para OpenCode:

- `design-system-starter` - Setup do Design System
- `tailwind-patterns` - Padrões Tailwind CSS v4
- `app-builder` - Orquestrador de criação de apps

## Próximos Passos

1. Customize o schema do Prisma em `my-api/prisma/schema.prisma`
2. Adicione suas rotas em `my-api/src/routes/`
3. Crie suas páginas em `my-app/src/pages/`
4. Configure a integração com seu agente de IA

## Variáveis de Ambiente

```env
# my-api/.env
PORT=3000
DATABASE_URL="file:./dev.db"
```

## Scripts

### Frontend (my-app)
```bash
npm run dev      # Dev server
npm run build    # Build produção
npm run lint     # Verificar código
```

### Backend (my-api)
```bash
npm run dev      # Dev server com nodemon
npm run build    # Compilar TS
npm start        # Produção
npm test         # Testes
```