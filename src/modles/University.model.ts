import mongoose, { Schema } from "mongoose";
import { IUniversity } from "../interfaces/IUniversity";

const universitySchema = new Schema<IUniversity>({
    universityName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    requirements: {
        type: String, 
        required: true
    }, 
    created_by_id: {
        type: Number, 
        required: true
    }

}, {
    timestamps: true, 
})

export const University = mongoose.model<IUniversity>("University", universitySchema);