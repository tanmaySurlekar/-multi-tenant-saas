# Multi-Tenant SaaS

A full-stack multi-tenant SaaS application built to demonstrate
backend engineering, tenant isolation, authentication,
authorization, and scalable application architecture.

## Technology Stack

### Backend

- NestJS
- TypeScript
- PostgreSQL

### Frontend

- React
- TypeScript
- Vite

### Development Tools

- pnpm workspaces
- Docker
- GitHub

## Project Architecture

Monorepo containing independently managed frontend and backend applications.

- `backend/` - NestJS API
- `frontend/` - React application
- `infrastructure/` - Local development infrastructure
- `docs/` - Architecture documentation and decisions

## Getting Started

Install dependencies:

    pnpm install

Start Database:

    pnpm db:up

Start backend:

    pnpm dev:backend

Start frontend:

    pnpm dev:frontend

## Project Status

Initial project setup.

## Setup environment variable

---

doppler configure set token=<token-string>
