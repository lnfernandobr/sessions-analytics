import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date,
});

export const UserModel = mongoose.model('User', userSchema);

export const UsersCollection = Object.assign(UserModel, {
  async save(user) {
    const newPassword = await bcrypt.hash(user.password, 10);
    const userToSave = new UserModel({
      ...user,
      password: newPassword,
      createdAt: new Date(),
    });

    return userToSave.save();
  },
});
