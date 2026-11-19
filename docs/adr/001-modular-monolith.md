# ADR 001: Modular Monolith Architecture

---

## Context

The application needs a maintainable backend architecture
that supports multiple tenants and clear business boundaries.

## Decision

Use NestJS with a modular monolith architecture.

## Reasons

- Clear module boundaries
- Simpler deployment and debugging
- Lower infrastructure complexity
- Easier transactional operations
- Ability to extract services later when justified

## Consequences

Each NestJS module must have clear responsibilities.
Modules should avoid unnecessary coupling.
