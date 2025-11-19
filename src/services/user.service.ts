import { IUser } from "../interfaces/IUser";
import { User } from "../models/User.model";

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find().select("-password");
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id).select("-password");
};

export const createUserByAdmin = async (userData: Partial<IUser>): Promise<IUser> => {
  // if admin wants to create a user (password must be provided)
  const newUser = new User(userData);
  await newUser.save();
  const obj = newUser.toObject();
  // delete obj.password;
  return obj;
};

export const updateUserByAdmin = async (id: string, updates: Partial<IUser>): Promise<IUser | null> => {
  if (updates.password) {
    // don't hash here; ideally admin should set password via a reset endpoint.
    // But if you want hashing here, import bcrypt and hash it.
  }
  const updated = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
  return updated;
};

export const deleteUserByAdmin = async (id: string): Promise<void> => {
  await User.findByIdAndDelete(id);
};
