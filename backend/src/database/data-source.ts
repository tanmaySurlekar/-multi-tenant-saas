import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { getDatabaseConfig } from '../config/database.config.js';
import { DATABASE_PATHS } from './database-path.js';

export default new DataSource({
  ...getDatabaseConfig(),
  entities: [DATABASE_PATHS.entities],
  migrations: [DATABASE_PATHS.migrationFiles],
});
