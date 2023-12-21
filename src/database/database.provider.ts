import { Sequelize } from 'sequelize-typescript';
// import { databaseConfig } from './database.config';
import { Dialect } from 'sequelize/types';
import Logs from 'src/entities/logs.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config={
        username: 'naman',
        password: 'admin@123',
        database: 'random_db',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql' as Dialect,
      }
      const sequelize = new Sequelize(config);
    sequelize.addModels([Logs]);
      await sequelize.sync({
        alter: true,
        // force: true
      });
      return sequelize;
    },
  },
];
