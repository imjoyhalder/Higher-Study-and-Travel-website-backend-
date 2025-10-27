// import { Request, Response } from "express";
// import * as authService from "../services/auth.service";

// export const register = async (req: Request, res: Response) => {
//     try {
//         const result = await authService.registerUser(req.body);
//         res.status(201).json(result);
//     } catch (error: any) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const login = async (req: Request, res: Response) => {
//     try {
//         const { email, password } = req.body;
//         const result = await authService.loginUser(email, password);
//         res.status(200).json(result);
//     } catch (error: any) {
//         res.status(400).json({ message: error.message });
//     }
// };

import { Request, Response } from "express";
import * as authService from "../services/auth.service";

// export const register = async (req: Request, res: Response) => {
//   try {
//     const result = await authService.registerUser(req.body);
//     res.status(201).json(result);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const register = async (req: Request, res: Response) => {
  try {
    console.log("📩 Incoming request body:", req.body); 
    const result = await authService.registerUser(req.body);
    console.log("✅ User saved:", result.user); 
    res.status(201).json(result);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};







export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};





// Auth controller logout

export const logout = async(req: Request , res:Response)=>{
  try{
     res.status(200).json({ message: "Logout successful" });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}