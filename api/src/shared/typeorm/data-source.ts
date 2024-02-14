import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.APP_DB_HOST,
  port: process.env.APP_DB_PORT ? parseInt(process.env.APP_DB_PORT) : 5432,
  username: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASSWORD,
  database: process.env.APP_DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/modules/**/typeorm/entities/*.ts'],
  migrations: ['src/shared/typeorm/migrations/*.ts'],
  subscribers: [],
});
