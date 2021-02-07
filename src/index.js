const app = require("./app");

const startServer = async () => {
  await app.listen(3000);
};

startServer();
