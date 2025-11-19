import express from "express";
import { createNewUniversity, deleteSingleUniversity, getAllUniversity, getSingleUniversity } from "../controllers/university.contoller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = express.Router();

// Use the controller (it handles req/res)

// ====== PUBLIC ROUTES (User can access) ======
router.get("/", getAllUniversity);
router.get("/:id",getSingleUniversity)


// ====== ADMIN ONLY ROUTES ======
router.post("/", authMiddleware, roleMiddleware(['admin']), createNewUniversity)
router.delete("/:id", authMiddleware, roleMiddleware(['admin']), deleteSingleUniversity)


export default router;