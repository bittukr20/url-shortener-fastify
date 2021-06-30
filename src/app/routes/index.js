const { createShortUrl } = require("../handlers/createShortUrl");
const { createShortUrlSchema } = require("../schemas/createShortUrl");

module.exports = async fastify => {
  fastify.route({
    method: "POST",
    url: "/",
    schema: createShortUrlSchema,
    handler: createShortUrl
  });
};
