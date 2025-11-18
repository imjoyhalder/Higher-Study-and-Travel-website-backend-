import mongoose, { Schema } from "mongoose";
import { IUniversity, UniversityType } from "../interfaces/IUniversity";

const universitySchema = new Schema<IUniversity>(
    {
        universityName: {
            type: String,
            required: true,
            trim: true,
        },

        country: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            unique: true,
            sparse: true,
        },

        ranking: {
            type: Number,
            required: true,
        },

        universityLogo: {
            type: String,
            default: null,
        },

        bannerImages: {
            type: [String],
            default: [],
        },

        description: {
            type: String,
            required: true,
        },

        established: {
            type: Date,
            required: true,
        },

        universityType: {
            type: String,
            enum: [UniversityType.PUBLIC, UniversityType.PRIVATE],
            required: true,
        },

        tuitionFee: {
            type: Number,
            required: true,
        },

        acceptanceRate: {
            type: Number,
            required: true,
        },

        programs: {
            type: [String],
            default: [],
        },

        Scholarship: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Scholarship",
            },
        ],

        contactEmail: {
            type: String,
            required: true,
        },

        officialWebsiteUrl: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export const University = mongoose.model<IUniversity>(
    "University",
    universitySchema
);
