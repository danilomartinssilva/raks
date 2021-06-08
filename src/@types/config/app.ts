export type AppConfig = {
  name: string;
  secret: string;
  port: number;
  env: string;
};
export default {
  name: process.env.APP_NAME || 'Spendfy Account Microservice',
  secret: process.env.SECRET || 'secret',
  port: process.env.PORT || 8002,
  env: process.env.NODE_ENV || 'development',
};
