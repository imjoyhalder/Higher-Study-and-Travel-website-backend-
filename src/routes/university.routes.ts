import express from "express";
import { createNewUniversity, deleteSingleUniversity, getAllUniversity } from "../controllers/university.contoller";

const router = express.Router();

// Use the controller (it handles req/res)
router.get("/", getAllUniversity);
router.post("/", createNewUniversity)
router.delete("/:id", deleteSingleUniversity)

export default router;