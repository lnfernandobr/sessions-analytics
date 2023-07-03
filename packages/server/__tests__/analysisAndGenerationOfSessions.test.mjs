import { analysisAndGenerationOfSessions } from "../services/analysisAndGenerationOfSessions.mjs";

const data = {
  events: [
    {
      url: "/pages/a-big-river",
      visitorId: "d1177368-2310-11e8-9e2a-9b860a0d9039",
      timestamp: 1512754583000,
    },
    {
      url: "/pages/a-small-dog",
      visitorId: "d1177368-2310-11e8-9e2a-9b860a0d9039",
      timestamp: 1512754631000,
    },
    {
      url: "/pages/a-big-talk",
      visitorId: "f877b96c-9969-4abc-bbe2-54b17d030f8b",
      timestamp: 1512709065294,
    },
    {
      url: "/pages/a-sad-story",
      visitorId: "f877b96c-9969-4abc-bbe2-54b17d030f8b",
      timestamp: 1512711000000,
    },
    {
      url: "/pages/a-big-river",
      visitorId: "d1177368-2310-11e8-9e2a-9b860a0d9039",
      timestamp: 1512754436000,
    },
    {
      url: "/pages/a-sad-story",
      visitorId: "f877b96c-9969-4abc-bbe2-54b17d030f8b",
      timestamp: 1512709024000,
    },
  ],
};

describe("analysisAndGenerationOfSessions", () => {
  test("should generate correct sessions for the given data", () => {
    const expectedSessions = {
      sessionsByUser: {
        "f877b96c-9969-4abc-bbe2-54b17d030f8b": [
          {
            duration: 41294,
            pages: [
              { url: "/pages/a-sad-story", timestamp: 1512709024000 },
              { url: "/pages/a-big-talk", timestamp: 1512709065294 },
            ],
            startTime: 1512709024000,
          },
          {
            duration: 0,
            pages: [{ url: "/pages/a-sad-story", timestamp: 1512711000000 }],
            startTime: 1512711000000,
          },
        ],
        "d1177368-2310-11e8-9e2a-9b860a0d9039": [
          {
            duration: 195000,
            pages: [
              { url: "/pages/a-big-river", timestamp: 1512754436000 },
              { url: "/pages/a-big-river", timestamp: 1512754583000 },
              { url: "/pages/a-small-dog", timestamp: 1512754631000 },
            ],
            startTime: 1512754436000,
          },
        ],
      },
    };

    expect(analysisAndGenerationOfSessions(data)).toEqual(expectedSessions);
  });

  test("should throw an error if data is not provided", () => {
    expect(() => {
      analysisAndGenerationOfSessions();
    }).toThrow("data was expected");
  });

  test("should throw an error if events array is empty", () => {
    const data = {
      events: [],
    };
    expect(() => {
      analysisAndGenerationOfSessions(data);
    }).toThrow("events is empty");
  });

  test("should generate sessions for a single visitor with only one event", () => {
    const data = {
      events: [
        {
          url: "/pages/a-big-river",
          visitorId: "d1177368-2310-11e8-9e2a-9b860a0d9039",
          timestamp: 1512754583000,
        },
      ],
    };

    const expectedSessions = {
      sessionsByUser: {
        "d1177368-2310-11e8-9e2a-9b860a0d9039": [
          {
            duration: 0,
            pages: [{ url: "/pages/a-big-river", timestamp: 1512754583000 }],
            startTime: 1512754583000,
          },
        ],
      },
    };

    expect(analysisAndGenerationOfSessions(data)).toEqual(expectedSessions);
  });
});
