const fastify = require("fastify")({
  logger: {
    level: "info",
    serializers: {
      req: function (req) {
        return { url: req.url };
      },
    },
  },
});
const routes = require("../routes");

module.exports = (app) => {
  routes(fastify);

  fastify.setNotFoundHandler((request, reply) => {
    fastify.log.debug("Route not found: ", request.raw.url);

    reply.status(404).send({ message: "Not found" });
  });

  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.debug(`Request url: `, request.req.url);
    fastify.log.debug(`Payload: `, request.body);
    fastify.log.error(`Error occurred: `, error);

    reply.status(500).send({ message: "Error occurred during request" });
  });

  return fastify;
};
