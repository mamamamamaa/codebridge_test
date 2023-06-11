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
        username: 'mssql',
        password: 'Qwerty_123456',
        database: 'codebridge',
      });
      sequelize.addModels([Dog]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
