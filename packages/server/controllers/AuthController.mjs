import jwt from "jsonwebtoken";
import { UsersCollection } from "../models/User.mjs";
import bcrypt from "bcrypt";
import { TokensCollection } from "../models/Token.mjs";
const { JWT_SECRET: jwtSecret } = process.env;

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userDb = await UsersCollection.findOne({
    email: email.toLowerCase().trim(),
  });

  if (!userDb) {
    return res
      .status(401)
      .json({ message: "User not found or does not exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, userDb.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const token = jwt.sign({ userId: userDb._id }, jwtSecret);

  await TokensCollection.save({ token });

  return res.json({ token });
};

export const signOut = async (req, res) => {
  const { authorization } = req.headers;
  await TokensCollection.deleteOne({ token: authorization });

  return res.json({ message: "Successfully logged out" });
};

export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication token not provided" });
  }

  try {
    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
};
