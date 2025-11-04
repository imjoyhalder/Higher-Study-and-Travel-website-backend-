import { University } from './../models/University.model';
import * as universityService from '../services/university.service';
import { Request, Response } from "express";
import { IUniversity } from '../interfaces/IUniversity';



export const createNewUniversity = async (req: Request, res: Response) => {
    try {
        const data: IUniversity = req.body;  

        // Optional: validate required fields
        if (!data.universityName || !data.country || !data.description || !data.requirements || !data.created_by_id) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newUniversity = await universityService.createUniversity(data);  // Service call
        res.status(201).json({ message: "University created successfully", university: newUniversity });
    } catch (error: any) {
        console.error("Error creating university:", error);
        res.status(500).json({ message: error.message || "Failed to create university" });
    }
};


export const getAllUniversity = async (req: Request, res: Response) => {
    try {
        const universities = await universityService.getAllUniversities();
        res.send(universities);
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch universities" });
    }
};



