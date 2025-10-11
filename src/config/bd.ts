import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string; // make sure the key matches your .env file

export const connectDB = async (): Promise<void> => {
    try {
        if (!uri) {
            throw new Error("❌ MONGO_URI not found in environment variables");
        }

        await mongoose.connect(uri);
        console.log(`✅ MongoDB connected to database: ${mongoose.connection.name}`);
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    }
};
