import { Request, Response } from "express";
import * as userService from '../services/user.service'

// all user get with only admin
export const getAllUsers = async(req:Request,res:Response):Promise<void>=>{
    try{
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    }catch(error:any){
 res.status(500).json({ message: error.message || "Failed to fetch users" })
    }
}


// Created by new users
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to create user" });
  }
};