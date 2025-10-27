// import bcrypt from "bcryptjs";
// import { User } from "../models/User.model";
// import { IUser } from "../interfaces/IUser";
// const jwt = require("jsonwebtoken")

// const JWT_SECRET = process.env.JWT_SECRET 
// const JWT_EXPIRES = "7d";

// export const registerUser = async (data: Partial<IUser>) => {
//     const { email, password, name } = data;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) throw new Error("Email already exists");

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//         name,
//         email,
//         password: hashedPassword,
//     });

//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id, email }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
//     return { user: newUser, token };
// };

// export const loginUser = async (email: string, password: string) => {
//     const user = await User.findOne({ email });
//     if (!user) throw new Error("Invalid credentials");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error("Invalid credentials");

//     const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
//     return { user, token };
// };

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model";
import { IUser } from "../interfaces/IUser";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";
const JWT_EXPIRES = "7d";

export const registerUser = async (data: Partial<IUser>) => {
  const { email, password, name } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const token = jwt.sign({ id: newUser._id, email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });

  return { user: newUser, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id, email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });

  return { user, token };
};
