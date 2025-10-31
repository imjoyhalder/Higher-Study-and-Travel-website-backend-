import express from "express";
import { getAllUniversity } from "../services/university.service";

const router = express.Router();

router.get('/', getAllUniversity);

export default router;
