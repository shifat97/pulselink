import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const createUser = async (userData) => {
  const { fullName, email, password } = userData;
  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return false;
  }

  const userModel = new User(userData);
  userModel.password = await bcrypt.hash(password, 10);
  await userModel.save();

  return userModel;
};

export const loginUser = async (loginCredential) => {
  const { email, password } = loginCredential;
  const isUserExits = await User.findOne({ email });

  if (!isUserExits) {
    return false;
  }

  const isPasswordEqual = await bcrypt.compare(password, isUserExits.password);

  if (!isPasswordEqual) {
    return false;
  }

  return isUserExits;
};

export const updateUser = async (_id, newData) => {
  const updateUserData = User.findOneAndUpdate({ _id: _id }, newData);
  return updateUserData;
};
