import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dog/models/dog.entity';
import { ERROR_MATCHES, SEQUELIZE_PROVIDER } from '../../consts/database';
import { initializeDatabase } from '../../utils/databaseInitialize';

// export const databaseProviders = [
//   {
//     provide: SEQUELIZE_PROVIDER,
//     useFactory: async () => {
//       const {
//         DATABASE_USER: username,
//         DATABASE_PASSWORD: password,
//         DATABASE_PORT,
//       } = process.env;
//       const port = Number(DATABASE_PORT);
//
//       const sequelize = new Sequelize({
//         dialect: 'mssql',
//         host: 'localhost',
//         retry: {
//           max: 10,
//           timeout: 3000,
//           match: ERROR_MATCHES,
//         },
//         port,
//         username,
//         password,
//       });
//
//       sequelize.addModels([Dog]);
//
//       await sequelize.sync();
//
//       await initializeDatabase();
//
//       return sequelize;
//     },
//   },
// ];

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
            host: 'localhost',
            port,
            username,
            password,
          });

          sequelize.addModels([Dog]);

          await sequelize.sync();

          await initializeDatabase();

          connected = true;
        } catch (error) {
          console.error('Failed to connect to the database. Retrying');
          await new Promise((resolve) => setTimeout(resolve, 10000));
        }
      }

      return sequelize;
    },
  },
];
