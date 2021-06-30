const { createShortUrl } = require("../services/createShortUrl");

exports.createShortUrl = async function createShortUrlHandler(request, reply) {
  const { response, statusCode } = await createShortUrl(this, request);
  return reply.code(statusCode).send(response);
};
