import { IUser } from "../interfaces/IUser";
import { User } from "../models/User.model";


//  all User get
export const getAllUsers = async (): Promise<IUser[]> => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error('Failed to fetch users')
    }
}

// Create By new User
export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};