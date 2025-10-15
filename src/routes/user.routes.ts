import { authMiddleware } from "../middleware/auth.middleware"
import { roleMiddleware } from "../middleware/role.middleware"
import { createUser, getAllUsers } from "../services/user.service"

const express = require('express')

const router =express.Router()


router.get('/',authMiddleware,roleMiddleware(["admin"]),getAllUsers)

router.get('/',createUser)


export default router;