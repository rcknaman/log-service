import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { databaseProviders } from './database.provider';

@Module({
  controllers: [],
  providers: [...databaseProviders],
  exports:[DatabaseModule,...databaseProviders]
})
export class DatabaseModule {}
