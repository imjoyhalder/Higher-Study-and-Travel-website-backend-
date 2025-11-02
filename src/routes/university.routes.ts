import express from "express";
import { getAllUniversities } from "../services/university.service";

const router = express.Router();

router.get('/', getAllUniversities);

export default router;
