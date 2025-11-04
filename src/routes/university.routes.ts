import express from "express";
import { createNewUniversity, getAllUniversity } from "../controllers/university.contoller";

const router = express.Router();

// Use the controller (it handles req/res)
router.get("/", getAllUniversity);
router.post("/", createNewUniversity)

export default router;