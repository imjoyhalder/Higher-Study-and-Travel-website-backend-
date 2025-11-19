import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import routes from "./routes/index.routes";
import { connectDB } from "./config/bd";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// connect with mongodb
connectDB();

// All routes
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("🌍 Study & Travel API is running 🚀");
});

export default app;
