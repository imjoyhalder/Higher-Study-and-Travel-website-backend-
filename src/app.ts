import express from "express";
import cors from "cors";
import passport from "passport";


const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.get("/", (req, res) => {
    res.send("🌍 Study & Travel API is running.🚀🚀..");
});

export default app;
