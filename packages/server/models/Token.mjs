import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token: String,
  createdAt: Date,
});

export const TokenModel = mongoose.model("Token", tokenSchema);

export const TokensCollection = Object.assign(TokenModel, {
  async save(user) {
    const tokenToSave = new TokenModel({
      ...user,
      createdAt: new Date(),
    });
    return tokenToSave.save();
  },
});
