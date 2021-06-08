import appConfig from '@config/app';
import createConnection from '@shared/infra/sequelize';
import 'dotenv/config';
import 'reflect-metadata';
import app from './app';



createConnection();

app.listen(appConfig.port, () => {
  console.log(
    `⚡️ Server listening on port ${appConfig.port} is service: ${appConfig.name} `
  );
});
