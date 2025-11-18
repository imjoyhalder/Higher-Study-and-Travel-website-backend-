import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

export enum UserRole {
    ADMIN = "admin",
    STUDENT = "student",
    AGENT = "agent",
}

export enum DocumentType {
    TRANSCRIPT = "transcript",
    PASSPORT_SCAN = "passport_scan",
    VISA = "visa",
    OTHER = "other",
}

const userSchema = new Schema<IUser>(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: Object.values(UserRole),
            default: UserRole.STUDENT,
        },

        profile_image: {
            type: String,
            default: null,
        },

        avatar: {
            type: String,
            default: null,
        },

        phone: {
            type: String,
            default: null,
        },

        dateOfBirth: {
            type: Date,
            default: null,
        },

        nationality: {
            type: String,
            default: null,
        },

        passport_number: {
            type: String,
            default: null,
        },

        documents: [
            {
                type: String,
                enum: Object.values(DocumentType),
            },
        ],

        isVerified: {
            type: Boolean,
            default: false,
        },

        verificationCode: {
            type: String,
            default: null,
        },

        resetPasswordToken: {
            type: String,
            default: null,
        },

        resetPasswordExpire: {
            type: Date,
            default: null,
        },

        booking: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "TravelBooking",
            },
        ],

        savedUniversity: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "University",
            },
        ],

        savedScholarships: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Scholarship",
            },
        ],

        savedPackages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "TravelPackage",
            },
        ],

        country: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

export const User = mongoose.model<IUser>("User", userSchema);
