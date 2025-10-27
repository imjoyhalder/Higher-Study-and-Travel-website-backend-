import { Router } from "express";
import userRoutes from "./user.routes";

 import universityRoutes  from "./university.routes"
 import authRoutes from "./auth.routes"
const router = Router()

router.use('/users',userRoutes)
router.use('/universities',universityRoutes)
router.use("/auth",authRoutes)

export default router;