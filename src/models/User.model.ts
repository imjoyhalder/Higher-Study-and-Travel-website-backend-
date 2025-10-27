import mongoose, { Schema, Document } from "mongoose";
import { IUser} from "../interfaces/IUser";
import bcrypt from "bcryptjs";

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
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: Object.values(UserRole),
            default: UserRole.STUDENT,
        },
        profile_image: {
            type: String,
        },
        phone: {
            type: String,
        },
        date_of_birth: {
            type: Date,
        },
        nationality: {
            type: String,
        },
        passport_number: {
            type: String,
        },
        documents: [
            {
                type: String,
                enum: Object.values(DocumentType),
            },
        ],
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);


// password has middleware
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password Compare
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>("User", userSchema);