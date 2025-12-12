// auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { isTokenBlacklisted, logoutUser } from '../services/auth.service';


const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    // Check if token is blacklisted (user logged out)
    if (isTokenBlacklisted(token)) {
        return res.status(401).json({ message: 'Token has been invalidated. Please login again.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export const logoutMiddleware = async (req: AuthRequest, res: Response) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }

        const success = logoutUser(token);
        
        if (success) {
            return res.json({ 
                message: 'Logged out successfully',
                logoutTime: new Date().toISOString()
            });
        } else {
            return res.status(500).json({ message: 'Failed to logout' });
        }
    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ message: 'Internal server error during logout' });
    }
};