import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (roles: string[]) => {
    return (req: any, res: Response, next: NextFunction) => {
        try {
            const userRole = req.user?.role;

            if (!roles.includes(userRole)) {
                return res.status(403).json({ 
                    message: "Access denied! You are not authorized." 
                });
            }

            next();
        } catch (error) {
            res.status(500).json({ message: "Authorization failed" });
        }
    };
};
