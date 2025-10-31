import { Router } from "express";
import userRoutes from "./user.routes";
import universityRoutes from './university.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/universities', universityRoutes)
router.use('/createUser',userRoutes)

export default router;
