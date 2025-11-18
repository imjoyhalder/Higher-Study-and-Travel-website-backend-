import { Types } from "mongoose";
import { statusType } from "../models/ScholarshipApplications.model";


export interface IScholarshipApplications extends Document{
    studentId: Types.ObjectId; 
    scholarshipId: Types.ObjectId; 
    universityId: Types.ObjectId; 
    fullName: string; 
    email: string; 
    phone: string; 
    country: string; 
    documents: string[]; 
    status: statusType; 
    submittedAt: Date; 
    updatedAt: Date; 
    notes?: string; 
    reviewedBy?: Types.ObjectId; 
    paymentStatus?: string; 
}