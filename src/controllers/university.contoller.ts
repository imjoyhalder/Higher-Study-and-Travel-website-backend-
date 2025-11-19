import { University } from './../models/University.model';
import * as universityService from '../services/university.service';
import { Request, Response } from "express";
import { IUniversity } from '../interfaces/IUniversity';


// Create a new university
export const createNewUniversity = async (req: Request, res: Response) => {
    try {
        const data: IUniversity = req.body;

        // Optional: validate required fields
        // if (!data.universityName || !data.country || !data.description) {
        //     return res.status(400).json({ message: "Please provide all required fields" });
        // }

        const newUniversity = await universityService.createUniversity(data);  // Service call
        res.status(201).json({ message: "University created successfully", university: newUniversity });
    } catch (error: any) {
        console.error("Error creating university:", error);
        res.status(500).json({ message: error.message || "Failed to create university" });
    }
};

// delete single university
export const deleteSingleUniversity = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deletedUniversity = await universityService.deleteSingleUniversity(id)
        res.status(200).json({ message: "University deleted successfully", university: deletedUniversity });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch universities" });
    }
}

// Get all Universities
export const getAllUniversity = async (req: Request, res: Response) => {
    try {
        const universities = await universityService.getAllUniversities();
        res.send(universities);
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch universities" });
    }
};

//Get single Universities
export const getSingleUniversity = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const singleUniversity = await universityService.getSingleUniversity(id)
        res.status(200).json(singleUniversity)
    } catch (error) {
        
    }
}




