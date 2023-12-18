import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { PROVIDERS } from './providers/providers';
import { Sequelize } from 'sequelize-typescript';
import Database from './entities/database.entity';
import { databaseProviders } from './database.provider';

@Module({
  // imports:[Databas],
  controllers: [DatabaseController],
  providers: [DatabaseService,...databaseProviders],
  exports:[DatabaseModule,...databaseProviders]
})
export class DatabaseModule {}
