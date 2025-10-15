import { Types } from "mongoose";

export interface IScholarship extends Document {
  scholarship_id: number;
  title: string;
  university_id: Types.ObjectId;
  eligibility: string;
  benefits: string;
  deadline: Date;
  created_by_id: Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
}
