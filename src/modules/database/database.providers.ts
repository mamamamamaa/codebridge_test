import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dog/models/dog.entity';
import { ERROR_MATCHES, SEQUELIZE_PROVIDER } from '../../consts/database';
import { DATABASE_INIT } from '../../consts/dog';

export const databaseProviders = [
  {
    provide: SEQUELIZE_PROVIDER,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        retry: {
          max: 10,
          timeout: 3000,
          match: ERROR_MATCHES,
        },
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
      });

      sequelize.addModels([Dog]);

      await sequelize.sync();

      await initializeDatabase();

      return sequelize;
    },
  },
];

async function initializeDatabase() {
  try {
    const existingDogs = await Dog.findAll();

    if (existingDogs.length === 0) await Dog.bulkCreate(DATABASE_INIT);
  } catch (error) {
    console.error('Database initializing failed: ' + error);
  }
}
