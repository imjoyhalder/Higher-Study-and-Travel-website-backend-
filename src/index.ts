import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/bd";

dotenv.config();
connectDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
