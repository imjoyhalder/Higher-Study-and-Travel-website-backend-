import { Scholarship } from './../models/Scholarship.model';
import { IScholarship } from "../interfaces/IScholarship";


export const getAllScholarships = async(): Promise<IScholarship[]> =>{
    try {
        const scholarship = await Scholarship.find({})
        return Scholarship
    } catch (error) {
        throw new Error('Failed to fetch universities')
    }
}