import express from "express";
import { sessionsByUser } from "../controllers/AnalyzedSessionController.mjs";
import { requireAuth } from "../controllers/AuthController.mjs";

const router = express.Router();

router.get("/", requireAuth, sessionsByUser);

export const sessionsByUserRoutes = router;
