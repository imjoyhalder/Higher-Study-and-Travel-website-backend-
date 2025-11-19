import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const created = await authService.registerUser(req.body);
        res.status(201).json({ success: true, user: created });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message || "Registration failed" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.json({ success: true, token: result.token, user: result.user });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message || "Login failed" });
    }
};
