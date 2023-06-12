import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dog/models/dog.entity';
import { ERROR_MATCHES, SEQUELIZE_PROVIDER } from '../../consts/database';

export const databaseProviders = [
  {
    provide: SEQUELIZE_PROVIDER,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        retry: {
          max: 5,
          timeout: 3000,
          match: ERROR_MATCHES,
        },
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
      });
      sequelize.addModels([Dog]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
