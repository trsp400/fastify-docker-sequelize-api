require("dotenv").config({
  path: `.env${"." + process.env.NODE_ENV}`,
});

const server = require("./config/server");

const app = server();

module.exports = app;
