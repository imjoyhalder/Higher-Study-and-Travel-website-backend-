import { University } from './../models/University.model';
import { IUniversity } from "../interfaces/IUniversity";



// get all university 
export const getAllUniversities = async (): Promise<IUniversity[]> => {
    try {
        const universities  =  await University.find({});
        console.log(universities);
        return universities
    } catch (error) {
        throw new Error("Failed to fetch universities");
    }
};

// export const getAllUniversity = async (): Promise<String> => {
//     try {
//         return 'Hit api successfully'
//     } catch (error) {
//         throw new Error('Failed to fetch universities')
//     }
// }