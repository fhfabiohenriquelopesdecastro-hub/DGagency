# ADR 001: Monorepo Setup

## Context

The project requires a monorepo structure to share code between the institutional website and the CMS admin dashboard while maintaining clear separation of concerns.

## Decision

Use pnpm workspaces with Turborepo for the monorepo structure:

- **pnpm workspaces**: Native workspace support, efficient dependency management, strict hoisting
- **Turborepo**: Build caching, parallel task execution, pipeline-based task orchestration

## Consequences

### Positive
- Shared packages (UI, database, schemas) reduce code duplication
- Consistent TypeScript configuration across all apps
- Turborepo caching significantly speeds up builds
- Clear dependency graph between packages

### Negative
- Additional tooling complexity
- Learning curve for developers unfamiliar with monorepos
- Package versioning requires careful management

## Alternatives Considered

1. **Nx**: More feature-rich but heavier, overkill for this project size
2. **Lerna**: Less actively maintained, inferior caching
3. **npm/yarn workspaces**: Less efficient than pnpm, no built-in caching