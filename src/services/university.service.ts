import { University } from './../models/University.model';
import { IUniversity } from "../interfaces/IUniversity";


//  Create a new university
export const createUniversity = async (data: IUniversity): Promise<IUniversity> => {
    try {
        const newUniversity = new University(data); 
        return await newUniversity.save(); 
    } catch (error) {
        throw new Error("Failed to create university");
    }
};


// Fetch all universities
export const getAllUniversities = async (): Promise<IUniversity[]> => {
    try {
        const universities = await University.find({});
        return universities;
    } catch (error) {
        throw new Error("Failed to fetch universities"); // Catches DB errors
    }
};


//Delete single university
export const deleteSingleUniversity = async (id: string) => {
    try {
        const deletedUniversity = await University.findByIdAndDelete(id);
        if (!deletedUniversity) {
            throw new Error("University not found");
        }
        return deletedUniversity; 
    } catch (error: any) {
        throw new Error(error.message || "Failed to delete university");
    }
};
