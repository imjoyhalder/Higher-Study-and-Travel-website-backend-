import { Router } from "express";
import userRoutes from "./user.routes";
import universityRoutes from "./university.routes";
import scholarshipRoutes from "./scholarship.routes"
import authRoutes from "./auth.routes";
import travePackageRoutes from './travelPackage.routes'

const router = Router();

router.use("/auth", authRoutes);          //   /api/auth/register, /api/auth/login
router.use("/users", userRoutes);         // protected admin routes: /api/users
router.use("/universities", universityRoutes); //     /api/universities
router.use("/scholarships", scholarshipRoutes) //     /api/scholarships
router.use("/travelPackage", travePackageRoutes) //   /api/travelPackage

export default router;
