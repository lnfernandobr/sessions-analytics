import { AnalyzedSessionsCollection } from "../models/AnalyzedSession.mjs";

export const sessionsByUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const sessions = await AnalyzedSessionsCollection.findOne({
      userId,
    });
    return res.json({ sessionsByUser: sessions?.sessionsByUser || [] });
  } catch (error) {
    throw new Error(error);
  }
};
