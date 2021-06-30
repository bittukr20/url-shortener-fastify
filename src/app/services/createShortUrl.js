const base64 = require("base-64");
const utf8 = require("utf8");

const { getShortenedUri } = require("../helpers/createShortUrl");

exports.createShortUrl = async (fastify, request) => {
  const { URI } = request.body;
  const bytes = utf8.encode(URI);
  const encodedURI = base64.encode(bytes);
  const shortenedUri = getShortenedUri(fastify, encodedURI);
  return { statusCode: 201, response: { shortURI: shortenedUri } };
};
