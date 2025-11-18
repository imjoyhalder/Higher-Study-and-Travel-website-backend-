import { Date, Types } from 'mongoose';

export enum UniversityType{
     'public', 
     'private'
}

export interface  IUniversity extends Document{
     universityName:string;
     country:string;
     slug?: string; 
     city: string; 
     ranking: number; 
     universityLogo?: string; 
     bannerImages: string[]; 
     description: string; 
     established: Date; 
     type: UniversityType; 
     tuitionFee: number; 
     acceptanceRate: number; 
     programs?: string[]; 
     Scholarship?: Types.ObjectId[], 
     contactEmail: string; 
     officialWebsiteUrl?: string; 
     createdAt?: Date; 
     updatedAt?: Date; 
}