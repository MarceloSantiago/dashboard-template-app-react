# Backend API

Estrutura do backend Fastify. Implementar em repositório separado.

## Estrutura

```
src/api/
├── routes/           # Rotas da API (auth, users, billing, etc.)
├── middleware/       # Auth, tenant, requiresPlan
├── lib/            # Prisma, encryption, response helpers
└── plugins/        # Plugins Fastify (CORS, etc.)
```

## Próximos Passos

1. Criar repositório backend separado
2. Implementar Fastify + Prisma
3. Migrar estruturas aqui definidas
