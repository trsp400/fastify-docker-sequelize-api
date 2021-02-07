const app = require("./app");

const startServer = async () => {
  await app.listen(3000, "0.0.0.0", () => {
    app.log.info("Server connected");
  });
};

startServer();
