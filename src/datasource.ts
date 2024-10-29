import { DataSource } from 'typeorm';
import { User } from './entities/users.entity';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: ['dist/src/migrations/*.js'],
  synchronize: false,
});
