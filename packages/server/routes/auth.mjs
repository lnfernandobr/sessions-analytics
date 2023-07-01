import express from "express";
import {
  requireAuth,
  signIn,
  signOut,
} from "../controllers/AuthController.mjs";

const router = express.Router();

router.get("/", (req, res) => res.send("oi"));
router.post("/signin", signIn);
router.post("/signout", requireAuth, signOut);

export const authRoutes = router;
