import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'YOURDATABASEUSERNAME',
        password: 'YOURDATABASEPASSWORD',
        database: 'DATABASENAME',
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });
      sequelize.addModels([]);

      // await sequelize.sync();
      return sequelize;
    },
  },
];
