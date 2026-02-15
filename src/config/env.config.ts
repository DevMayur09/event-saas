import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

/**
 * Load correct environment file
 */

const NODE_ENV = process.env.NODE_ENV || 'developement';

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${NODE_ENV}`),
});

/**
 * Environment schema validations
 */

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.number().default(3000),
  APP_NAME: z.string().min(1),
  API_VERSION: z.string().default('v1'),
  API_PREFIX: z.string().default('/api/v1'),

  DATABASE_URL: z.string().url(),

  JWT_ACCESS_SECRET: z.string().min(10),
  JWT_REFRESH_SECRET: z.string().min(10),
  JWT_ACCESS_EXPIRES_IN: z.string(),
  JWT_REFRESH_EXPIRES_IN: z.string(),

  REDIS_HOST: z.string(),
  REDIS_PORT: z.number(),
  REDIS_PASSWORD: z.string().optional(),

  RATE_LIMIT_WINDOW: z.coerce.number(),
  RATE_LIMIT_MAX: z.coerce.number(),

  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']),
});

/**
 * Parse and export environment variables
 */
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(`❌ Invalid environment variables:`, parsedEnv.error.format());
  process.exit(1);
}

export const env = {
  nodeEnv: parsedEnv.data.NODE_ENV,
  isDevelopment: parsedEnv.data.NODE_ENV === 'development',
  isProduction: parsedEnv.data.NODE_ENV === 'production',
  isTest: parsedEnv.data.NODE_ENV === 'test',

  app: {
    name: parsedEnv.data.APP_NAME,
    version: parsedEnv.data.API_VERSION,
    prefix: parsedEnv.data.API_PREFIX,
    port: parsedEnv.data.PORT,
  },
  database: {
    url: parsedEnv.data.DATABASE_URL,
  },
  jwt: {
    accessSecret: parsedEnv.data.JWT_ACCESS_SECRET,
    refreshSecret: parsedEnv.data.JWT_REFRESH_SECRET,
    accessExpiresIn: parsedEnv.data.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: parsedEnv.data.JWT_REFRESH_EXPIRES_IN,
  },
  redis: {
    host: parsedEnv.data.REDIS_HOST,
    port: parsedEnv.data.REDIS_PORT,
    password: parsedEnv.data.REDIS_PASSWORD,
  },
  rateLimit: {
    window: parsedEnv.data.RATE_LIMIT_WINDOW,
    max: parsedEnv.data.RATE_LIMIT_MAX,
  },
  logLevel: parsedEnv.data.LOG_LEVEL,
};
