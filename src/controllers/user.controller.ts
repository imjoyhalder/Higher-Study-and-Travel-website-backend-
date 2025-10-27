import { Request, Response } from "express";
import * as userService from '../services/user.service'

// all user get with only admin

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    console.log("API hit");
  try {
    const users = await userService.getAllUsers();
      console.log("Users fetched");
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};



// Created by new users

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to create user" });
  }
};