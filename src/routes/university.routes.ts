import { Router } from 'express';
import { getAllUniversity } from '../services/university.service';

const express = require('express')
const router = express.Router()

router.get('/', getAllUniversity)

export default router