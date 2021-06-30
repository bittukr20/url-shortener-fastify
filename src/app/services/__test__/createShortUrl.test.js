const { createShortUrl } = require("../createShortUrl");
const { getShortenedUri } = require("../../helpers/createShortUrl");

jest.mock("../../helpers/createShortUrl");

const fastify = { config: { INITIAL_VALUE: 1000 } };
const request = { body: { URI: "www.abc.com" } };
describe("Service test", () => {
  test("createShortUrl should return proper uri after calculation", async () => {
    getShortenedUri.mockReturnValue("iq");
    const response = await createShortUrl(fastify, request);
    expect(response).toEqual({ response: { shortURI: "iq" }, statusCode: 201 });
  });
});
