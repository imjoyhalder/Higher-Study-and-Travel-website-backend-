import { Router } from "express";
import userRoutes from "./user.routes";
import universityRoutes from './university.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/createUser',userRoutes)


// University routes
router.use('/universities', universityRoutes)


export default router;
