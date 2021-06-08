import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  const connection = createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? 'PGDB_TREES_TEST'
          : defaultOptions.database,
    })
  );

  console.log('⚡️ Postgres Connected');

  return connection;
};
