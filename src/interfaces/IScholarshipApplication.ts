import { Types } from "mongoose";

enum statusType{
    'pending', 
    'reviewed', 
    'approved', 
    'rejected'
}

export interface IScholarship extends Document{
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