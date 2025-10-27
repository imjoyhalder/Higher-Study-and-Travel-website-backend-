import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import routes from "./routes/index"
import { connectDB } from "./config/bd";


dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(passport.initialize());

 // MongoDB connect
    connectDB()
//  All Routes
app.use("/api", routes);

app.get("/", (req, res) => {
    console.log(`Server is running on port ${process.env.PORT}`);
    res.send("🌍 Study & Travel API is running.🚀🚀..");
   
});

export default app;
