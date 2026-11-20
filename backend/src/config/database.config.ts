import { DataSourceOptions } from 'typeorm';

export const getDatabaseConfig = (): DataSourceOptions => {
  const requiredVariables = [
    'POSTGRES_HOST',
    'POSTGRES_DB',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
  ];

  for (const variable of requiredVariables) {
    if (!process.env[variable]) {
      throw new Error(`Missing required environment variable: ${variable}`);
    }
  }

  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,

    synchronize: false,
    logging: process.env.NODE_ENV === 'development',

    migrationsRun: false,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/**/*.entity.ts'],
  };
};
