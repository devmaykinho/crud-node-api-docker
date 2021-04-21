require('dotenv/config');

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

module.exports = {

    development: {
      client: "mysql",
      connection: {
        host: "db",
        user: "root",
        password: "123456",
        database: "sistema",
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: "./src/database/migrations"
      },
      useNullAsDefault: true,
    } 
}   