import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './modules/user/users.module';
import { typeOrmConfig } from './orm.config';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
