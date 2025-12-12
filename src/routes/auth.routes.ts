
import express from 'express';
import {
    register,
    login,
    logout,
    getCurrentUser,
    changePassword,
    verifyToken
} from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/verify-token', verifyToken);

// Protected routes (require authentication)
router.post('/logout', authMiddleware, logout);
router.get('/me', authMiddleware, getCurrentUser);
router.put('/change-password', authMiddleware, changePassword);

export default router;