import { Types } from "mongoose";
import { UserRole } from "../models/User.model";

export interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    role?: UserRole;
    profile_image?: string;
    phone?: string;
    dateOfBirth?: Date;
    nationality?: string;
    passport_number?: string;
    documents?: DocumentType[];
    isVerified?: boolean; 
    verificationCode?: string; 
    resetPasswordToken?: string; 
    resetPasswordExpire?: Date, 
    booking?: Types.ObjectId[]
    savedUniversity?: Types.ObjectId[]
    savedScholarships?: Types.ObjectId[]; 
    savedPackages?: Types.ObjectId[]; 
    country?: string
    avatar?: string
    created_at?: Date;
    updated_at?: Date;
}