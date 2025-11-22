import { isValidObjectId } from "mongoose";
import { ITravelPackage } from "../interfaces/ITravelPackage";
import { TravelPackage } from "../models/TravelPackage.model";

// Create Travel Package
export const createTravelPackage = async (data: ITravelPackage) => {
    try {
        const newTravelPackage = new TravelPackage(data);
        return await newTravelPackage.save();
    } catch (error: any) {
        throw new Error(error.message || "Failed to create travel package");
    }
};

// get single Travel package
export const getSingleTravelPackage = async (id: string) => {
    try {
        if (!isValidObjectId(id)) throw new Error("Invalid travel package ID");

        const travelPackage = await TravelPackage.findById(id).lean();

        if (!travelPackage) throw new Error("Travel package not found");

        return travelPackage;
    } catch (error: any) {
        throw new Error(error.message || "Travel package not found");
    }
};

// Get All Travel Packages
export const getAllTravelPackages = async () => {
    try {
        return await TravelPackage.find({}).lean();
    } catch (error: any) {
        throw new Error(error.message || "Failed to fetch travel packages");
    }
};

// Delete Travel Package
export const deleteSinglePackage = async (id: string) => {
    try {
        if (!isValidObjectId(id)) throw new Error("Invalid travel package ID");

        const deleted = await TravelPackage.findByIdAndDelete(id);

        if (!deleted) throw new Error("Travel package not found");

        return deleted;
    } catch (error: any) {
        throw new Error(error.message || "Failed to delete travel package");
    }
};

// Update Travel Package
export const updateSingleTravelPackage = async (
    id: string,
    data: Partial<ITravelPackage>
) => {
    try {
        if (!isValidObjectId(id)) throw new Error("Invalid travel package ID");

        const updatedTravelPackage = await TravelPackage.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });

        if (!updatedTravelPackage) throw new Error("Travel package not found");

        return updatedTravelPackage;
    } catch (error: any) {
        throw new Error(error.message || "Failed to update travel package");
    }
};
