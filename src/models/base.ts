import knex from 'knex';
import {dbDefaultConnection} from '../config';

export const db = knex({
  client: 'pg',
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
  },
  pool: {
    min: 0,
    max: 10,
  },
});