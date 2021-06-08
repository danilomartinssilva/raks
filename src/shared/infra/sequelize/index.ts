import config from '@config/database';
import { Sequelize } from 'sequelize';

console.log(config)

//

/* constructor(database: string, username: string, password?: string, options?: Options); */

export default async (): Promise<void> => {
  const configuration = new Sequelize(config);
  try {
    await configuration.authenticate();

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
