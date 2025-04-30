import knex from 'knex';
import {dbDefaultConnection} from '../config';

export const db = knex({
  client: 'pg',
  connection: dbDefaultConnection,
  pool: {
    min: 0,
    max: 10,
  },
});