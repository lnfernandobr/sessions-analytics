export const analysisAndGenerationOfSessions = (data) => {
  if (!data) {
    throw new Error("data was expected");
  }
  if (!data.events.length) {
    throw new Error("events is empty");
  }
  try {
    const { events } = data;
    const sessionsByUser = {};

    // Sort ascending events
    events.sort((a, b) => a.timestamp - b.timestamp);

    events.forEach((event) => {
      const { url, visitorId, timestamp } = event;

      // Check if user has existing sessions or create a new one
      if (!sessionsByUser[visitorId]) {
        sessionsByUser[visitorId] = [];
      }

      const sessions = sessionsByUser[visitorId];
      const previousSession = sessions[sessions.length - 1];

      const isEmptySessions = !sessions.length;
      const isMoreThan10Minutos =
        previousSession && timestamp - previousSession.startTime > 600000;

      const shouldRegisterNewSession = isEmptySessions || isMoreThan10Minutos;

      if (shouldRegisterNewSession) {
        sessions.push({
          duration: 0,
          pages: [{ url, timestamp }],
          startTime: timestamp,
        });
        return;
      }

      previousSession.pages.push({ url, timestamp });
    });

    for (const visitorId in sessionsByUser) {
      const sessions = sessionsByUser[visitorId];

      sessionsByUser[visitorId] = sessions.map((session) => {
        const { pages, startTime } = session;
        const duration =
          pages.length > 1 ? pages[pages.length - 1].timestamp - startTime : 0;
        return {
          duration,
          pages,
          startTime,
        };
      });
    }

    return sessionsByUser;
  } catch (error) {
    throw new Error(error);
  }
};
