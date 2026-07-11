# ADR 003: Authentication (Better Auth)

## Context

The CMS admin dashboard requires secure authentication with session management, role-based access, and potential for 2FA.

## Decision

Use Better Auth for authentication:

- **Better Auth**: Modern, lightweight auth library for Next.js
- **Cookie-based sessions**: httpOnly, secure, sameSite cookies
- **Role-based access**: admin, editor, viewer roles

## Consequences

### Positive
- Lightweight compared to NextAuth.js
- Built-in support for email/password auth
- Flexible session management
- Good TypeScript support

### Negative
- Newer library, smaller community
- Manual session management required
- No built-in OAuth providers (can be added later)

## Alternatives Considered

1. **NextAuth.js**: More features but heavier, more opinionated
2. **Supabase Auth**: Vendor lock-in, less control
3. **Custom auth**: More work, security risks