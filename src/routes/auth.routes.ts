import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/register", authController.register); // public
router.post("/login", authController.login);       // public

export default router;
