import mongoose, { Schema } from "mongoose";
import { IScholarship } from "../interfaces/IScholarship";
import { scholarshipTypes } from "../interfaces/IScholarship";

const scholarshipSchema = new Schema<IScholarship>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    county: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    universityId: {
      type: Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },

    type: {
      type: String,
      enum: [scholarshipTypes.FULL, scholarshipTypes.PARTIAL, scholarshipTypes.MERIT],
      required: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    amount: {
      type: Number,
      default: 0,
    },

    applicationFee: {
      type: Number,
      default: 0,
    },

    eligibility: {
      type: [String],
      default: [],
    },

    requirements: {
      type: [String],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    applyLink: {
      type: String,
      default: null,
    },

    benefits: {
      type: String,
      default: null,
    },

    createdById: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: Boolean,
      default: true, // open
    },
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Scholarship = mongoose.model<IScholarship>(
  "Scholarship",
  scholarshipSchema
);
