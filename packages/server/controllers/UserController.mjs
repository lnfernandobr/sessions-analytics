import { UsersCollection } from '../models/User.mjs';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const userDb = await UsersCollection.findOne({
    email: email.toLocaleString().trim(),
  });

  if (userDb) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const user = await UsersCollection.save({
    name,
    email,
    password,
  });
  return res.json(user);
};
