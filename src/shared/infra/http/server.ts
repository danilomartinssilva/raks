import appConfig from '@config/app';
import 'reflect-metadata';
import app from './app';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});




app.listen(appConfig.port, () => {
  console.log(
    `⚡️ Server listening on port ${appConfig.port} is service: ${appConfig.name} `
  );
});
