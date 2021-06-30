const fs = require("fs");
const { getShortenedUri } = require("../createShortUrl");

jest.mock("fs");

const fastify = { config: { INITIAL_VALUE: 1000 } };

describe("Helpers test", () => {
  test("getShortenedUri should return proper uri after calculation", async () => {
    fs.readFileSync.mockReturnValueOnce("{}");
    const response = getShortenedUri(fastify, "abcdefgh");
    expect(response).toEqual("iq");
  });

  test("getShortenedUri should return proper uri from file", async () => {
    fs.readFileSync.mockReturnValueOnce('{"abcdefgh": {"shortUri": "iq"}}');
    const response = getShortenedUri(fastify, "abcdefgh");
    expect(response).toEqual("iq");
  });
});
