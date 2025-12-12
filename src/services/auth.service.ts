// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken"; 

// const bcrypt  = require('bcrypt')

// import { User } from "../models/User.model";
// import { IUser } from "../interfaces/IUser";

// const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
// const JWT_SECRET = process.env.JWT_SECRET || "secret";
// const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// export const registerUser = async (userData: Partial<IUser>) => {
//     // make sure required fields exist — validations can be improved
//     if (!userData.email || !userData.password || !userData.fullName) {
//         throw new Error("fullName, email and password are required");
//     }

//     // check duplicate email
//     const existing = await User.findOne({ email: userData.email });
//     if (existing) throw new Error("Email already exists");

//     // hash password
//     const hashed = await bcrypt.hash(userData.password!, SALT_ROUNDS);

//     const newUser = new User({
//         ...userData,
//         password: hashed,
//     });

//     await newUser.save();

//     // remove password before returning
//     const obj = newUser.toObject();
//     // delete obj.password;
//     return obj;
// };

// export const loginUser = async (email: string, password: string) => {
//     if (!email || !password) throw new Error("Email and password are required");

//     const user = await User.findOne({ email });
//     if (!user) throw new Error("User not found");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error("Invalid credentials");

//     // sign token (store minimal info; id and role)
//     const payload = { id: user._id.toString(), role: user.role };
//     const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

//     const userObj = user.toObject();
//     // delete userObj.password;

//     return { token, user: userObj };
// };

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken"; 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

import { User } from "../models/User.model";
import { IUser } from "../interfaces/IUser";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// Define an interface for user without password
interface IUserWithoutPassword extends Omit<IUser, 'password'> {
    _id: string;
}

// Helper function to remove password from user object
const removePasswordFromUser = (user: any): IUserWithoutPassword => {
    const { password, ...userWithoutPassword } = user.toObject ? user.toObject() : user;
    return userWithoutPassword as IUserWithoutPassword;
};

// Token blacklist for logout (in production, use Redis or database)
const tokenBlacklist = new Set<string>();

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

    // Remove password before returning
    return removePasswordFromUser(newUser);
};

export const loginUser = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    // sign token (store minimal info; id and role)
    const payload = { 
        id: user._id.toString(), 
        role: user.role,
        email: user.email 
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return { 
        token, 
        user: removePasswordFromUser(user) 
    };
};

// Logout function - add token to blacklist
export const logoutUser = (token: string): boolean => {
    try {
        // Add token to blacklist
        tokenBlacklist.add(token);
        
        // Optionally: Remove expired tokens periodically (in production)
        // You could set up a cron job or use TTL with Redis
        
        return true;
    } catch (error) {
        console.error('Error during logout:', error);
        return false;
    }
};

// Middleware to check if token is blacklisted
export const isTokenBlacklisted = (token: string): boolean => {
    return tokenBlacklist.has(token);
};

// Get current user info (without password)
export const getCurrentUser = async (userId: string) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");
        
        return removePasswordFromUser(user);
    } catch (error) {
        throw new Error("Failed to fetch user");
    }
};

// Change password function
export const changePassword = async (userId: string, currentPassword: string, newPassword: string) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        // Verify current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) throw new Error("Current password is incorrect");

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        
        // Update password
        user.password = hashedPassword;
        await user.save();

        return { success: true, message: "Password updated successfully" };
    } catch (error) {
        throw error;
    }
};

// For production use, consider these enhancements:
// 1. Use Redis for token blacklist with TTL
// 2. Implement refresh token rotation
// 3. Add rate limiting for login attempts
// 4. Store logout tokens in database with expiration

// Redis-based logout system (commented example)
/*
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const logoutUserRedis = async (token: string, expiresIn: string): Promise<boolean> => {
    try {
        // Decode token to get expiration
        const decoded: any = jwt.decode(token);
        const expiresAt = decoded.exp * 1000; // Convert to milliseconds
        const ttl = Math.floor((expiresAt - Date.now()) / 1000);
        
        if (ttl > 0) {
            // Store token in Redis with TTL
            await redis.set(`blacklist:${token}`, '1', 'EX', ttl);
        }
        return true;
    } catch (error) {
        console.error('Redis logout error:', error);
        return false;
    }
};

export const isTokenBlacklistedRedis = async (token: string): Promise<boolean> => {
    const result = await redis.get(`blacklist:${token}`);
    return result === '1';
};
*/
