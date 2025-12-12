import { Router } from "express";
import userRoutes from "./user.routes";
import universityRoutes from "./university.routes";
import authRoutes from "./auth.routes";

import { travePackageRoutes } from "./travelPackage.routes";
import { scholarshipRoutes } from "./scholarship.routes";
import { scholarshipApplication } from "./scholarshipApplication.routes";

const router = Router();

router.use("/auth", authRoutes);         
router.use("/users", userRoutes);        
router.use("/universities", universityRoutes); 
router.use("/scholarships", scholarshipRoutes) 
router.use("/travelPackage", travePackageRoutes) 
router.use("/scholarship-application",scholarshipApplication ) 

export default router;
