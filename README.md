# Digital Agency

Site institucional premium e CMS proprietário para agência digital.

## Stack

- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS
- **Backend**: Next.js Server Actions, Drizzle ORM, PostgreSQL (Supabase)
- **Auth**: Better Auth
- **UI**: shadcn/ui customizado, Lucide Icons
- **Motion**: Framer Motion, GSAP (futuro)
- **Monorepo**: pnpm workspaces, Turborepo

## Estrutura

```
/apps
  /web      → Site institucional (Next.js)
  /admin    → CMS + Dashboard (Next.js)
/packages
  /ui             → Design System
  /database       → Schema Drizzle, migrations
  /schemas        → Zod schemas
  /config         → ESLint, TypeScript, Tailwind
/docs
  /adr            → Architecture Decision Records
```

## Setup

1. Instale as dependências:
   ```bash
   pnpm install
   ```

2. Configure as variáveis de ambiente:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   cp apps/admin/.env.example apps/admin/.env.local
   ```

3. Execute o desenvolvimento:
   ```bash
   pnpm dev
   ```

## Comandos

- `pnpm dev` - Inicia o desenvolvimento
- `pnpm build` - Build de produção
- `pnpm lint` - Verifica código
- `pnpm typecheck` - Verifica tipos

## Documentação

- [AGENT.md](./AGENT.md) - Diretrizes do projeto
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura do sistema
- [ROADMAP.md](./ROADMAP.md) - Plano de desenvolvimento
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Design system
- [DATABASE.md](./DATABASE.md) - Banco de dados