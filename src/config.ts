import { log } from "console";

const pool = require('pg').Pool;

const db_conn_checker = new pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT})




export function checkDBConnection() {
    var connectionStatus = false;
    db_conn_checker.connect((err: any) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return false;
        }
        console.log('Connected to the database');
    })
    connectionStatus = true;
    return connectionStatus;
}

export const dbDefaultConnection = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
  }
