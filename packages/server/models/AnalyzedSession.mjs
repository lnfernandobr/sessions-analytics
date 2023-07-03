import mongoose from "mongoose";

const analyzedSessionSchema = new mongoose.Schema({
  userId: String,
  sessionsByUser: {
    type: Object,
    strict: false,
  },
});

export const AnalyzedSession = mongoose.model(
  "analyzedSession",
  analyzedSessionSchema,
);

export const AnalyzedSessionsCollection = Object.assign(AnalyzedSession, {
  async save(session) {
    const { userId } = session;

    const sessionsDb = await AnalyzedSession.findOne({ userId });
    if (!sessionsDb) {
      const sessionToSave = new AnalyzedSession(session);
      return sessionToSave.save();
    }

    await AnalyzedSession.updateOne({ userId }, session);
  },
});
