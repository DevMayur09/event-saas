event-saas/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── database.js
│   │   ├── env.js
│   │   ├── logger.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── organization/
│   │   ├── event/
│   │   ├── guest/
│   │   ├── invitation/
│   │   ├── user/
│   │   ├── role/
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── tenant.middleware.js
│   │   ├── error.middleware.js
│   │
│   ├── common/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── exceptions/
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   ├── redis/
│   │   ├── email/
│   │
│   └── routes/
│
├── tests/
├── docker/
├── docs/
├── .env
├── package.json
