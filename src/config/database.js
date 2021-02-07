require("dotenv").config({
  path: `.env${"." + process.env.NODE_ENV}`,
});

module.exports = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  dialect: process.env.DB_DIALECT,
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST_DB,
};
