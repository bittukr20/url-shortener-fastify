require("dotenv").config();
const fastifyEnv = require("fastify-env");
const envSchema = require("env-schema");

const { envSchema: schema } = require("./app/commons/schema");
const routes = require("./app/routes");

function create() {
  // eslint-disable-next-line global-require
  const fastify = require("fastify")();

  // Env vars plugin
  fastify.register(fastifyEnv, {
    dotenv: true,
    schema
  });

  // Routes
  fastify.register(routes, { prefix: "/url-shortener" });

  return fastify;
}

async function start() {
  const fastify = create();
  const defaultSchema = {
    type: "object",
    properties: {
      HOST: {
        type: "string",
        default: "127.0.0.1"
      },
      PORT: {
        type: "integer",
        default: 8080
      }
    }
  };
  const config = envSchema({ schema: defaultSchema, dotenv: true });
  // Run the server!
  fastify.listen(config.PORT, config.HOST, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    // eslint-disable-next-line no-console
    console.log(`server listening on ${address}`);
  });
}

if (process.env.NODE_ENV !== "test") {
  start();
}

module.exports = {
  create
};
