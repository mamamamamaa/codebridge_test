import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dog/models/dog.entity';
import {
  CONNECTION_TIMEOUT_IN_SECONDS,
  SEQUELIZE_PROVIDER,
} from '../../consts/database';
import { initializeDatabase } from '../../utils/databaseInitialize';

export const databaseProviders = [
  {
    provide: SEQUELIZE_PROVIDER,
    useFactory: async () => {
      const {
        DATABASE_USER: username,
        DATABASE_PASSWORD: password,
        DATABASE_PORT,
      } = process.env;
      const port = Number(DATABASE_PORT);

      let sequelize: Sequelize | null = null;
      let connected = false;

      while (!connected) {
        try {
          sequelize = new Sequelize({
            dialect: 'mssql',
            host: 'db',
            port,
            username,
            password,
          });

          sequelize.addModels([Dog]);

          await sequelize.sync();

          await initializeDatabase();

          connected = true;

          console.log('Connection successful');
        } catch (error) {
          console.error(
            `Failed to connect to the database. Retrying after ${CONNECTION_TIMEOUT_IN_SECONDS} seconds`,
          );
          await new Promise((resolve) =>
            setTimeout(resolve, CONNECTION_TIMEOUT_IN_SECONDS * 1000),
          );
        }
      }

      return sequelize;
    },
  },
];
