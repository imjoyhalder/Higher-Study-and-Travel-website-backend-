import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";
import { createUser, getAllUsers } from "../services/user.service";

const router = express.Router();


router.get('/', authMiddleware, roleMiddleware(["admin"]), getAllUsers);


router.post('/', createUser);

export default router;
