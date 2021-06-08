export type AppConfig = {
  name: string;
  secret: string;
  port: number;
  env: string;
};
export default {
  name: process.env.APP_NAME || 'Raks Test',
  secret: process.env.SECRET || 'secret',
  port: process.env.PORT || 8051,
  env: process.env.NODE_ENV || 'development',
};
