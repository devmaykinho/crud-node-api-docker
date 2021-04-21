require('dotenv/config');

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

module.exports = {

    development: {
      client: "pg",
      connection: {
        host: "gta-erp.cp8u2bk6ibid.us-east-1.rds.amazonaws.com",
        port: 5432,
        user: "gtaprod",
        password: "Maalbuqu3",
        database: "gtaerpprod",
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