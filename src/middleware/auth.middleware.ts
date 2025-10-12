import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken")
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_TOKEN


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {

//  Bearer Token
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

//   Verify TOken
    const decoded = jwt.verify(token, JWT_SECRET);

    (req as any).user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
