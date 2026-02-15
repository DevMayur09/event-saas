event-saas/
│
├── src/
│
│   ├── app.ts
│   ├── server.ts
│
│   ├── config/
│   │   ├── env.config.ts
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   ├── redis.config.ts
│   │   ├── jwt.config.ts
│   │   ├── logger.config.ts
│   │   └── index.ts
│
│   ├── common/
│   │   ├── utils/
│   │   │   ├── date.util.ts
│   │   │   ├── crypto.util.ts
│   │   │   ├── pagination.util.ts
│   │   │   ├── response.util.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── constants/
│   │   │   ├── roles.constant.ts
│   │   │   ├── permissions.constant.ts
│   │   │   ├── http-status.constant.ts
│   │   │   ├── app.constant.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── exceptions/
│   │   │   ├── base.exception.ts
│   │   │   ├── http.exception.ts
│   │   │   ├── validation.exception.ts
│   │   │   ├── unauthorized.exception.ts
│   │   │   ├── forbidden.exception.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── types/
│   │   │   ├── global.types.ts
│   │   │   ├── pagination.types.ts
│   │   │   ├── express.d.ts
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.repository.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.types.ts
│   │   │   ├── auth.validation.ts
│   │   │   ├── auth.constants.ts
│   │   │   ├── auth.middleware.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── organization/
│   │   │   ├── organization.controller.ts
│   │   │   ├── organization.service.ts
│   │   │   ├── organization.repository.ts
│   │   │   ├── organization.routes.ts
│   │   │   ├── organization.types.ts
│   │   │   ├── organization.validation.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── event/
│   │   │   ├── event.controller.ts
│   │   │   ├── event.service.ts
│   │   │   ├── event.repository.ts
│   │   │   ├── event.routes.ts
│   │   │   ├── event.types.ts
│   │   │   ├── event.validation.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── guest/
│   │   │   ├── guest.controller.ts
│   │   │   ├── guest.service.ts
│   │   │   ├── guest.repository.ts
│   │   │   ├── guest.routes.ts
│   │   │   ├── guest.types.ts
│   │   │   ├── guest.validation.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── invitation/
│   │   │   ├── invitation.controller.ts
│   │   │   ├── invitation.service.ts
│   │   │   ├── invitation.repository.ts
│   │   │   ├── invitation.routes.ts
│   │   │   ├── invitation.types.ts
│   │   │   ├── invitation.validation.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── user/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.repository.ts
│   │   │   ├── user.routes.ts
│   │   │   ├── user.types.ts
│   │   │   ├── user.validation.ts
│   │   │   └── index.ts
│   │   │
│   │   └── role/
│   │       ├── role.controller.ts
│   │       ├── role.service.ts
│   │       ├── role.repository.ts
│   │       ├── role.routes.ts
│   │       ├── role.types.ts
│   │       ├── role.validation.ts
│   │       └── index.ts
│
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── tenant.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── async-handler.middleware.ts
│   │   ├── validation.middleware.ts
│   │   ├── rate-limit.middleware.ts
│   │   ├── request-id.middleware.ts
│   │   ├── logger.middleware.ts
│   │   └── index.ts
│
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── client.ts
│   │   │   ├── migrations/
│   │   │   ├── seeds/
│   │   │   └── index.ts
│   │   │
│   │   ├── redis/
│   │   │   ├── redis.client.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── email/
│   │   │   ├── email.service.ts
│   │   │   ├── email.templates.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── queue/
│   │   │   ├── queue.config.ts
│   │   │   ├── email.queue.ts
│   │   │   ├── invitation.queue.ts
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│
│   ├── routes/
│   │   ├── index.ts
│   │   ├── health.routes.ts
│   │   ├── auth.routes.ts
│   │   ├── organization.routes.ts
│   │   ├── event.routes.ts
│   │   ├── guest.routes.ts
│   │   ├── invitation.routes.ts
│   │   └── user.routes.ts
│
│   ├── jobs/
│   │   ├── email.job.ts
│   │   ├── invitation.job.ts
│   │   ├── guest-import.job.ts
│   │   └── index.ts
│
│   └── types/
│       └── index.ts
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── docs/
│
├── prisma/                (if using Prisma)
│   ├── schema.prisma
│   └── migrations/
│
├── .env
├── .env.development
├── .env.production
├── .env.test
├── tsconfig.json
├── package.json
├── .eslintrc.json
├── .prettierrc
└── .gitignore
