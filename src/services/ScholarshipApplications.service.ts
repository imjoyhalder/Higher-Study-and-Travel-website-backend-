import { ScholarshipApplication } from '../models/ScholarshipApplications.model';
import { IScholarshipApplications } from './../interfaces/IScholarshipApplication';


export const postScholarshipApplication = async (data:any) => {
    try {
        const newApplication =  await ScholarshipApplication.create(data)
        return newApplication
    } catch (error) {
        throw new Error("Can't submit your application please try again")
    }
}