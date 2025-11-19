import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
const jwt = require('jsonwebtoken')
import { User } from "../models/User.model";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(token, JWT_SECRET);

    // attach full user object (without password) to req
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "Invalid token" });

    // @ts-ignore - attach user
    req.user = user;
    next();
  } catch (error: any) {
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};
