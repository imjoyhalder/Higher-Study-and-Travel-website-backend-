import { UserRole } from "../models/User.model";

export interface IUser extends Document {
    isModified(arg0: string): unknown;
    user_id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    profile_image?: string;
    phone?: string;
    date_of_birth?: Date;
    nationality?: string;
    passport_number?: string;
    documents?: DocumentType[];
    created_at?: Date;
    updated_at?: Date;
}