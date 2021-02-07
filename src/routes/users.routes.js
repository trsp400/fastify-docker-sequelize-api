module.exports = (server) => {
  server.get("/users", (request, reply) => {
    reply.send("awoaa");
  });
};
