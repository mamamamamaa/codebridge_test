import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dog/dog.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        // database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([Dog]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
