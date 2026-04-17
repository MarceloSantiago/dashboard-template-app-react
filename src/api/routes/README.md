# Rotas da API

## Estrutura

```
routes/
├── auth/
│   └── index.ts
└── [dominio]/
    └── index.ts
```

## Padrão de rota

```typescript
// Exemplo: routes/examples/index.ts
import type { FastifyInstance } from 'fastify'

export async function exampleRoutes(fastify: FastifyInstance) {
  fastify.get('/examples', async (request, reply) => {
    return reply.send({ success: true, data: [] })
  })
}
```
