import express  from "express";
import { createNewTravelPackage, deleteSinglePackage, getAllTravelPackages, getSingleTravelPackage, updateSingleTravelPackage } from "../controllers/travelpackage.controller";
import { roleMiddleware } from "../middleware/role.middleware";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router()

// public routes
router.get('/',authMiddleware, getAllTravelPackages)
router.get('/:id',authMiddleware, getSingleTravelPackage)

// privet routes for admin 
router.post('/',authMiddleware,roleMiddleware(['admin']), createNewTravelPackage)
router.delete('/:id',authMiddleware, roleMiddleware(['admin']), deleteSinglePackage)
router.put('/:id', authMiddleware, roleMiddleware(["admin"]),updateSingleTravelPackage)

export const travePackageRoutes =  router; 