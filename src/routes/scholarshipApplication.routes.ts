import { Router } from 'express';
import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { submitScholarshipApplication } from '../controllers/ScholarshipApplication.controller';


const router = express.Router()

router.post('/', authMiddleware, submitScholarshipApplication)

export const scholarshipApplication =  router; 