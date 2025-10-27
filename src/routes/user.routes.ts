// import { createUser, getAllUsers } from "../controllers/user.controller"



// import { authMiddleware } from "../middleware/auth.middleware"
// import { roleMiddleware } from "../middleware/role.middleware"



// const express = require('express')

// const router =express.Router()


// router.get('/',getAllUsers)

// router.post('/',createUser)


// export default router;

import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = express.Router();

// Example protected routes
// router.get("/", authMiddleware, roleMiddleware(["admin"]), getAllUsers);
router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
