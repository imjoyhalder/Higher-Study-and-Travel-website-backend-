import { Date, Types } from "mongoose";

export enum scholarshipTypes {
  FULL = "full",
  PARTIAL = "partial",
  MERIT = "merit",
}


export interface IScholarship extends Document {
  title: string;
  county: string; 
  slug: string; 
  universityId: Types.ObjectId; 
  type: scholarshipTypes; 
  deadline: Date
  amount?: number, 
  applicationFee?: number,
  eligibility?: string[]; 
  requirements: string[]; 
  description: string; 
  applyLink?: string; 
  benefits?: string; 
  createdById?: Types.ObjectId
  status: boolean // open or closed
  created_at?: Date;
  updated_at?: Date;
}
