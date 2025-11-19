// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken"; 
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcrypt')

import { User } from "../models/User.model";
import { IUser } from "../interfaces/IUser";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export const registerUser = async (userData: Partial<IUser>) => {
    // make sure required fields exist — validations can be improved
    if (!userData.email || !userData.password || !userData.fullName) {
        throw new Error("fullName, email and password are required");
    }

    // check duplicate email
    const existing = await User.findOne({ email: userData.email });
    if (existing) throw new Error("Email already exists");

    // hash password
    const hashed = await bcrypt.hash(userData.password!, SALT_ROUNDS);

    const newUser = new User({
        ...userData,
        password: hashed,
    });

    await newUser.save();

    // remove password before returning
    const obj = newUser.toObject();
    // delete obj.password;
    return obj;
};

export const loginUser = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    // sign token (store minimal info; id and role)
    const payload = { id: user._id.toString(), role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    const userObj = user.toObject();
    // delete userObj.password;

    return { token, user: userObj };
};
