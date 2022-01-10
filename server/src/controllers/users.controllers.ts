import UserModel, { type User } from '../models/user.model';

// Create
export const createUser = async (user: User) => {
  const newUser = new UserModel(user);
  const doc = await newUser.save();
  return doc;
};

// Get all
export const getUsers = async (): Promise<User[]> => {
  const users = await UserModel.find();
  return users;
};

// Get one
export const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email });
  return user;
};

// Update
export const updateUserByEmail = async (
  email: string,
  update: Partial<User>
) => {
  const user = await getUserByEmail(email);
  Object.assign(user, update);
  let doc = {};
  if (user) doc = await user.save();
  return doc;
};

// Delete
export const deleteUserByEmail = async (email: string) => {
  const user = await getUserByEmail(email);
  let doc = {};
  if (user) doc = await user.remove();
  return doc;
};
