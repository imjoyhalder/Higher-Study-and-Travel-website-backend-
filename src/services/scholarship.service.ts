import { Scholarship } from "../models/Scholarship.model";
import { IScholarship } from "../interfaces/IScholarship";

// Create Scholarship
export const createScholarship = async (
    data: IScholarship
): Promise<IScholarship> => {
    try {
        const newScholarship = await Scholarship.create(data);
        return newScholarship; 
    } catch (error) {
        throw new Error("Failed to create scholarship");
    }
};

// Get All Scholarships
export const getAllScholarship = async (): Promise<IScholarship[]> => {
    try {
        return await Scholarship.find({});
    } catch (error) {
        throw new Error("Failed to fetch scholarships");
    }
};

// Get Single Scholarship
export const getSingleScholarship = async (
    id: string
): Promise<IScholarship> => {
    try {
        const scholarship = await Scholarship.findById(id);

        if (!scholarship) {
            throw new Error("Scholarship not found");
        }

        return scholarship;
    } catch (error) {
        throw new Error("Failed to fetch scholarship");
    }
};

// Delete Scholarship
export const deleteSingleScholarship = async (id: string): Promise<IScholarship> => {
    try {
        const deletedScholarship = await Scholarship.findByIdAndDelete(id);

        if (!deletedScholarship) {
            throw new Error("Scholarship not found");
        }

        return deletedScholarship;
    } catch (error) {
        throw new Error("Failed to delete scholarship");
    }
};

// Update Scholarship
export const updateSingleScholarship = async (id: string, data: any): Promise<IScholarship> => {
    try {
        const updatedScholarship = await Scholarship.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        );

        if (!updatedScholarship) {
            throw new Error("Scholarship not found");
        }
        return updatedScholarship;
    } catch (error: any) {
        throw new Error(error.message || "Failed to update scholarship");
    }
};

