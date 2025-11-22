import express from "express";
import { createNewUniversity, deleteSingleUniversity, getAllUniversity, getSingleUniversity, updateUniversity } from "../controllers/university.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = express.Router();

// Use the controller (it handles req/res)

// ====== PUBLIC ROUTES (User can access) ======
router.get("/",authMiddleware, getAllUniversity);
router.get("/:id",authMiddleware, getSingleUniversity)


// ====== ADMIN ONLY ROUTES ======
router.post("/", authMiddleware, roleMiddleware(['admin']), createNewUniversity)
router.put("/:id", authMiddleware, roleMiddleware(['admin']), updateUniversity )
router.delete("/:id", authMiddleware, roleMiddleware(['admin']), deleteSingleUniversity)


export default router;