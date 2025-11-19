import { Request, Response } from "express";
import * as scholarshipService from "../services/scholarship.service";

// Create a new Scholarship
export const createNewScholarship = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const scholarship = await scholarshipService.createScholarship(data);

        res.status(201).json({
            message: "Scholarship created successfully",
            scholarship,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to create scholarship",
        });
    }
};

// Get all Scholarships
export const getAllScholarships = async (req: Request, res: Response) => {
    try {
        const scholarships = await scholarshipService.getAllScholarship();
        res.status(200).json(scholarships);
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to fetch scholarships",
        });
    }
};

// Get single Scholarship
export const getSingleScholarship = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.getSingleScholarship(id);

        res.status(200).json(scholarship);
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to fetch scholarship",
        });
    }
};

// Update single Scholarship
export const updateSingleScholarship = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.updateSingleScholarship(id, req.body);

        res.status(200).json({
            message: "Scholarship updated successfully",
            scholarship,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to update scholarship",
        });
    }
};

// Delete single Scholarship
export const deleteSingleScholarship = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.deleteSingleScholarship(id);

        res.status(200).json({
            message: "Scholarship deleted successfully",
            scholarship,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to delete scholarship",
        });
    }
};
