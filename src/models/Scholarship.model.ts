import mongoose, { Schema, Document } from "mongoose";
import { IScholarship } from "../interfaces/IScholarship";

const scholarshipSchema = new Schema<IScholarship>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    university_id: {
      type: Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
      trim: true,
    },
    benefits: {
      type: String,
      required: true,
      trim: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    created_by_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: false,
    },
  }
);

export const Scholarship = mongoose.model<IScholarship>(
  "Scholarship",
  scholarshipSchema
);
