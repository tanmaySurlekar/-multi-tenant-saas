import { resolve } from 'node:path';

export const DATABASE_PATHS = {
  entities: resolve(process.cwd(), 'src/**/*.entity.ts'),
  migrations: resolve(process.cwd(), 'src/database/migrations'),
  migrationFiles: resolve(process.cwd(), 'src/database/migrations/*.ts'),
};
