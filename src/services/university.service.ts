import { University } from './../models/University.model';
import { IUniversity } from "../interfaces/IUniversity";
import { IUser } from "../interfaces/IUser";
import { User } from "../models/User.model";


// get all university 
export const getAllUniversity = async (): Promise<IUniversity[]> => {
    try{
        const universities = await University.find({})
        return universities
    }
    catch(error){
        throw new Error('Failed to fetch universities')
    }
}