import { Router } from 'express';
import express  from 'express';
import { createNewScholarship, deleteSingleScholarship, getAllScholarships, getSingleScholarship, updateSingleScholarship } from '../controllers/scholarship.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = express.Router()

// ====== PUBLIC ROUTES (User can access) ======
router.get('/', getAllScholarships)
router.get("/:id", getSingleScholarship)


// ====== ADMIN ONLY ROUTES ======
router.post("/", authMiddleware, roleMiddleware(['admin']), createNewScholarship)
router.put("/:id", authMiddleware, roleMiddleware(['admin']), updateSingleScholarship)
router.delete("/:id", authMiddleware, roleMiddleware(['admin']), deleteSingleScholarship)

export default router;