import { Request, Response } from "express";
import * as travelPackageService from "../services/TravelPackage.service";


// ===============================
// Create New Travel Package
// ===============================
export const createNewTravelPackage = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        const travelPackage = await travelPackageService.createTravelPackage(data);

        return res.status(201).json({
            message: "Travel package created successfully",
            data: travelPackage,
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message || "Failed to create travel package",
        });
    }
};



// ===============================
// Get Single Travel Package
// ===============================
export const getSingleTravelPackage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const travelPackage = await travelPackageService.getSingleTravelPackage(id);

        return res.status(200).json({
            message: "Travel package fetched successfully",
            data: travelPackage,
        });
    } catch (error: any) {
        return res.status(404).json({
            message: error.message || "Travel package not found",
        });
    }
};



// ===============================
// Get All Travel Packages
// ===============================
export const getAllTravelPackages = async (req: Request, res: Response) => {
    try {
        const travelPackages = await travelPackageService.getAllTravelPackages();

        return res.status(200).json({
            message: "All travel packages fetched successfully",
            data: travelPackages,
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message || "Failed to fetch travel packages",
        });
    }
};



// ===============================
// Delete Travel Package
// ===============================
export const deleteSinglePackage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await travelPackageService.deleteSinglePackage(id);

        return res.status(200).json({
            message: "Travel package deleted successfully",
            data: deleted,
        });
    } catch (error: any) {
        return res.status(404).json({
            message: error.message || "Failed to delete travel package",
        });
    }
};



// ===============================
// Update Travel Package
// ===============================
export const updateSingleTravelPackage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updated = await travelPackageService.updateSingleTravelPackage(id, data);

        return res.status(200).json({
            message: "Travel package updated successfully",
            data: updated,
        });
    } catch (error: any) {
        return res.status(400).json({
            message: error.message || "Failed to update travel package",
        });
    }
};
