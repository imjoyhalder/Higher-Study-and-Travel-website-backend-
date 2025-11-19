import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

// All routes below require admin role
router.use(authMiddleware, roleMiddleware(["admin"]));

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);         // create user by admin
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
