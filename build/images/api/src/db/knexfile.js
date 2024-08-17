require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "example",
      password: "example",
      database: "test",
      port: process.env.POSTGRES_PORT || 5432
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};