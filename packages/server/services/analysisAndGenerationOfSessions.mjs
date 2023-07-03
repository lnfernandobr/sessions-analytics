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

    events.forEach(({ url, visitorId, timestamp }) => {
      // Check if user has existing sessions or create a new one
      if (!sessionsByUser[visitorId]) {
        sessionsByUser[visitorId] = [];
      }

      const sessions = sessionsByUser[visitorId];
      const previousSession = sessions[sessions.length - 1];
      const currentVisit = { url, timestamp };

      const isEmptySessions = !sessions.length;
      const isMoreThan10Minutos =
        previousSession && timestamp - previousSession.startTime > 600000;
      const shouldRegisterNewSession = isEmptySessions || isMoreThan10Minutos;

      if (shouldRegisterNewSession) {
        sessions.push({
          duration: 0,
          pages: [currentVisit],
          startTime: timestamp,
        });
        return;
      }

      previousSession.pages.push(currentVisit);
      previousSession.duration = timestamp - sessions[0].startTime;
    });

    return { sessionsByUser };
  } catch (error) {
    throw new Error(error);
  }
};
