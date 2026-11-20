import { DATABASE_PATHS } from '../database/database-path.js';
import { spawnSync } from 'node:child_process';

const migrationName = process.argv[2];

if (!migrationName) {
  throw new Error('Please provide a migration name.');
}

const result = spawnSync(
  'tsx',
  [
    './node_modules/typeorm/cli.js',
    'migration:create',
    `${DATABASE_PATHS.migrations}/${migrationName}`,
  ],
  {
    stdio: 'inherit',
    shell: false,
  },
);

process.exitCode = result.status ?? 1;
