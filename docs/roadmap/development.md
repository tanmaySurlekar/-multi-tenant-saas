## Project roadmap

---

##### 8 milestones

---

1. Backend foundation
   - TypeORM installation
   - NestJS database integration
   - Doppler configuration
   - PostgreSQL connectivity
   - Migration setup
2. Control-plane implementation
   - Tenant entity
   - User entity
   - Tenant membership
   - Database registry
   - Initial migrations
3. Authentication and authorization
   - Registration and login
   - JWT access and refresh tokens
   - Password hashing
   - RBAC
   - Tenant membership validation
4. Shared database multi-tenancy
   - Tenant context
   - Tenant-aware repositories
   - PostgreSQL RLS
   - Transaction management
   - Cross-tenant isolation tests
5. Dedicated database support
   - Database provisioning
   - Tenant database routing
   - Connection pooling
   - Dedicated migrations
   - Database lifecycle management
6. Business modules
   - Projects
   - Tasks
   - Teams
   - Invitations
   - Activity tracking
7. Production engineering
   - Unit and integration testing
   - Structured logging
   - Error handling
   - Rate limiting
   - Health checks
   - Docker production setup
8. Deployment and portfolio
   - Cloud deployment
   - CI/CD
   - Database backups
   - Architecture documentation
   - System design diagrams
   - Performance testing
