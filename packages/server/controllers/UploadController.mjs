import fs from "fs";
import { analysisAndGenerationOfSessions } from "../services/analysisAndGenerationOfSessions.mjs";
import { AnalyzedSessionsCollection } from "../models/AnalyzedSession.mjs";

export const handleUploads = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const fileContent = fs.readFileSync(req.file.path, "utf-8");
    const rawSessions = JSON.parse(fileContent);
    const sessionsByUser = analysisAndGenerationOfSessions(rawSessions);

    await AnalyzedSessionsCollection.save({
      sessionsByUser,
      userId,
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
