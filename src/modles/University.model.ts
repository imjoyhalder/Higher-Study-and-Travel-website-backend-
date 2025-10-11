import mongoose, { Schema } from "mongoose";

const universitySchema = new Schema({
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

export const University = mongoose.model("University", universitySchema);