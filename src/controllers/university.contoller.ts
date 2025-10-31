
import * as universityService from '../services/university.service'
import { Request, Response } from "express";

export const getAllUniversity = async (req: Request, res: Response): Promise<void> => {
    try {
        const universities = await universityService.getAllUniversity()
        res.status(200).json(universities)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch users" })
    }
}