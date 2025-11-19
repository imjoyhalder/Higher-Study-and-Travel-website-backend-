import { Router } from "express";
import userRoutes from "./user.routes";
import universityRoutes from "./university.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/auth", authRoutes);          // /api/auth/register, /api/auth/login
router.use("/users", userRoutes);         // protected admin routes: /api/users
router.use("/universities", universityRoutes); // /api/universities

export default router;
