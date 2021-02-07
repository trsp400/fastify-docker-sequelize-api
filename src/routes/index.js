const routes = [require("./users.routes")];

module.exports = (server) => {
  routes.map((route) => {
    route(server);
  });
};
