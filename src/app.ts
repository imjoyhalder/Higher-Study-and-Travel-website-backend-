import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import routes from "./routes/index.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// All Routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
    res.send("🌍 Study & Travel API is running.🚀🚀..");
});

export default app;
