const fs = require("fs");

function findUriInData(key) {
  const data = fs.readFileSync("./src/app/data/urls.json");
  const obj = JSON.parse(data);
  if (obj[key]) {
    return { shortUri: obj[key].shortUri, data };
  }
  return { shortUri: null, data: obj };
}

function saveShortUriInData(encodedUri, shortUri, data) {
  // eslint-disable-next-line no-param-reassign
  data[encodedUri] = { shortUri };
  fs.writeFileSync("./src/app/data/urls.json", JSON.stringify(data));
}

function getNewShortUri(fastify) {
  let newValue = fastify.config.INITIAL_VALUE;
  const possibleAlph =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const shorturl = [];
  while (newValue) {
    shorturl.push(possibleAlph[newValue % 62]);
    newValue = Math.floor(newValue / 62);
  }
  // eslint-disable-next-line no-param-reassign
  fastify.config.INITIAL_VALUE += 1;

  return shorturl.join("");
}

function getShortenedUri(fastify, encodedUri) {
  const { shortUri, data } = findUriInData(encodedUri);
  if (shortUri) {
    return shortUri;
  }
  const newShortUri = getNewShortUri(fastify);
  saveShortUriInData(encodedUri, newShortUri, data);
  return newShortUri;
}

module.exports = {
  getShortenedUri
};
