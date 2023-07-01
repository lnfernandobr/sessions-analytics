import express from "express";
import "./models/index.mjs";
import cors from "cors";
import { authRoutes } from "./routes/auth.mjs";
import { uploadRoutes } from "./routes/upload.mjs";
import { errorHandler } from "./middlewares/errorHandler.mjs";
import "express-async-errors";
import { userRoutes } from "./routes/users.mjs";
import { sessionsByUserRoutes } from "./routes/sessionsByUser.mjs";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/upload", uploadRoutes);
app.use("/sessions-by-user", sessionsByUserRoutes);

app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port: ${port}`);
});
