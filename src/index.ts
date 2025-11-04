import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/bd";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // 1️⃣ Connect to MongoDB
        await connectDB();

        // 2️⃣ Start Express server after DB is ready
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

startServer();

