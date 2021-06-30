const { create } = require("../../../index");

const { createShortUrl } = require("../../services/createShortUrl");

jest.mock("../../services/createShortUrl");

describe("URL Shortener handlers test", () => {
  let fastify;
  beforeAll(async () => {
    fastify = create();
    await fastify.ready();
  });

  afterAll(async () => {
    jest.clearAllMocks();
    await fastify.close();
  });

  test("createShortUrl should return 200, in case of success", async () => {
    createShortUrl.mockResolvedValueOnce({
      response: { shortURI: "5aA" },
      statusCode: 201
    });
    const response = await fastify.inject({
      method: "POST",
      url: "/url-shortener",
      accept: "application/json",
      payload: {
        URI: "https://www.google.com"
      }
    });

    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.payload)).toEqual({
      shortURI: "5aA"
    });
  });
});
