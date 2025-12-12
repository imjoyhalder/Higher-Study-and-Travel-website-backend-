import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const created = await authService.registerUser(req.body);
        res.status(201).json({
            success: true,
            user: created,
            message: "Registration successful"
        });
    } catch (error: any) {
        console.error("Registration error:", error);
        const statusCode = error.message === "Email already exists" ? 409 : 400;
        res.status(statusCode).json({
            success: false,
            message: error.message || "Registration failed"
        });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
            return;
        }

        const result = await authService.loginUser(email, password);
        res.json({
            success: true,
            token: result.token,
            user: result.user,
            message: "Login successful"
        });
    } catch (error: any) {
        console.error("Login error:", error);
        const statusCode = error.message === "Invalid credentials" ||
            error.message === "User not found" ? 401 : 400;
        res.status(statusCode).json({
            success: false,
            message: error.message || "Login failed"
        });
    }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.status(400).json({
                success: false,
                message: "Authorization header is required"
            });
            return;
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(400).json({
                success: false,
                message: "Bearer token is required"
            });
            return;
        }

        const success = authService.logoutUser(token);

        if (success) {
            // Clear token from client if stored in cookie
            res.clearCookie('access_token');

            res.json({
                success: true,
                message: "Logout successful",
                logoutTime: new Date().toISOString()
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Failed to logout"
            });
        }
    } catch (error: any) {
        console.error("Logout error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error during logout"
        });
    }
};

export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user?.id;

        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
            return;
        }

        const user = await authService.getCurrentUser(userId);
        res.json({
            success: true,
            user
        });
    } catch (error: any) {
        console.error("Get current user error:", error);
        res.status(404).json({
            success: false,
            message: error.message || "User not found"
        });
    }
};

export const changePassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user?.id;
        const { currentPassword, newPassword } = req.body;

        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
            return;
        }

        if (!currentPassword || !newPassword) {
            res.status(400).json({
                success: false,
                message: "Current password and new password are required"
            });
            return;
        }

        if (newPassword.length < 6) {
            res.status(400).json({
                success: false,
                message: "New password must be at least 6 characters long"
            });
            return;
        }

        const result = await authService.changePassword(userId, currentPassword, newPassword);
        res.json({
            success: true,
            message: result.message
        });
    } catch (error: any) {
        console.error("Change password error:", error);
        const statusCode = error.message === "Current password is incorrect" ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || "Failed to change password"
        });
    }
};

// Refresh token endpoint (if implementing refresh token rotation)
export const refreshToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(400).json({
                success: false,
                message: "Refresh token is required"
            });
            return;
        }

        // Implement refresh token validation and new access token generation
        // This would depend on your refresh token implementation

        res.status(501).json({
            success: false,
            message: "Refresh token endpoint not implemented"
        });
    } catch (error: any) {
        console.error("Refresh token error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to refresh token"
        });
    }
};

// Verify token endpoint
export const verifyToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.status(400).json({
                success: false,
                message: "Authorization header is required"
            });
            return;
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(400).json({
                success: false,
                message: "Bearer token is required"
            });
            return;
        }

        // Check if token is blacklisted
        const isBlacklisted = authService.isTokenBlacklisted(token);

        if (isBlacklisted) {
            res.status(401).json({
                success: false,
                message: "Token has been invalidated",
                isValid: false
            });
            return;
        }

        // For full verification, you would need to verify the JWT signature
        // This is a basic check - in production, verify with JWT_SECRET

        res.json({
            success: true,
            message: "Token is valid",
            isValid: true
        });
    } catch (error: any) {
        console.error("Verify token error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to verify token"
        });
    }
};