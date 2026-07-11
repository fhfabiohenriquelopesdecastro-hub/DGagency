# ADR 002: Database Choice (PostgreSQL + Drizzle ORM)

## Context

The project needs a relational database for the CMS with type-safe queries, good performance, and easy migrations.

## Decision

Use PostgreSQL via Supabase with Drizzle ORM:

- **PostgreSQL**: Robust, well-supported, excellent for relational data
- **Supabase**: Managed PostgreSQL with built-in auth, storage, and real-time
- **Drizzle ORM**: Type-safe, lightweight, excellent TypeScript support

## Consequences

### Positive
- Type-safe database queries with excellent TypeScript inference
- Lightweight runtime compared to Prisma
- Declarative migrations with drizzle-kit
- Supabase provides managed infrastructure (backups, scaling, auth)

### Negative
- Drizzle is newer than Prisma, smaller ecosystem
- Supabase vendor lock-in for managed services
- Manual connection pooling setup required

## Alternatives Considered

1. **Prisma**: More mature, larger ecosystem, but heavier runtime
2. **Raw SQL**: More control but less type safety
3. **MongoDB**: NoSQL doesn't fit relational data model