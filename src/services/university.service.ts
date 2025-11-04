import { University } from './../models/University.model';
import { IUniversity } from "../interfaces/IUniversity";


//  Create a new university

// export const createUniversity = async(data: IUniversity): Promise<IUniversity[]> =>{
//     const newUniversity = await University(data)
//     newUniversity.save()
// }

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
