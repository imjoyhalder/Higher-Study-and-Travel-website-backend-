import { Schema, model, Types } from "mongoose";
import { IScholarshipApplications } from "../interfaces/IScholarshipApplication";


export enum statusType {
    pending = "pending",
    reviewed = "reviewed",
    approved = "approved",
    rejected = "rejected",
}

const ScholarshipApplicationSchema = new Schema<IScholarshipApplications>(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: "User", // here was Student model reference 
            required: true,
        },

        scholarshipId: {
            type: Schema.Types.ObjectId,
            ref: "Scholarship",
            required: true,
        },

        universityId: {
            type: Schema.Types.ObjectId,
            ref: "University",
            required: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        documents: {
            type: [String],
            required: true,
            default: [],
        },

        status: {
            type: String,
            enum: Object.values(statusType),
            default: statusType.pending,
        },

        submittedAt: {
            type: Date,
            default: Date.now,
        },

        updatedAt: {
            type: Date,
            default: Date.now,
        },

        notes: {
            type: String,
            default: "",
        },

        reviewedBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            default: null,
        },

        paymentStatus: {
            type: String,
            enum: ["unpaid", "paid", "refunded"],
            default: "unpaid",
        },
    },
    {
        timestamps: true,
    }
);

// Create model
export const ScholarshipApplication = model<IScholarshipApplications>(
    "ScholarshipApplication",
    ScholarshipApplicationSchema
);



// {
//   "studentId": "676abc123def456789012345",
//   "scholarshipId": "691e4078a3222f0ac7861cf2",
//   "universityId": "691e249604892a92f6e71f92",

//   "fullName": "John Michael Carter",
//   "email": "johncarter@example.com",
//   "phone": "+8801789123456",
//   "country": "Bangladesh",

//   "documents": [
//     "https://example.com/docs/passport.pdf",
//     "https://example.com/docs/transcript.pdf"
//   ],

//   "status": "pending",
//   "notes": "Student applied for full scholarship consideration.",
//   "reviewedBy": '69224026e1cf13498c0f953d',
//   "paymentStatus": "unpaid"
// }
// 