exports.createShortUrlSchema = {
  tags: ["URL Shortener"],
  summary: "This API is used to get shortened URL",
  description: "This API is used to get shortened URL",
  body: {
    type: "object",
    required: ["URI"],
    additionalProperties: false,
    properties: {
      URI: {
        type: "string",
        description: "URI that need to be shortened",
        minLength: 1,
        format: "uri"
      }
    }
  },
  response: {
    201: {
      type: "object",
      properties: {
        shortURI: { type: "string" }
      }
    }
  }
};
