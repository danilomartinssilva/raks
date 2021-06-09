import { Sequelize } from 'sequelize';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'mysql',
});
try {
  sequelize.authenticate();

  console.log('Connection Mysql has been established successfully. 🌟🍺');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
