import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express';
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET_TOKEN


export const authMiddleWare = (req:Request,res:Response,next:NextFunction)=>
{
    try{
        // Bearer Token
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({message:"Access Denied. No Token"})
        }
        // Verify Token
         const decoded= jwt.verify(token, JWT_SECRET);

        // Setting user info in req object
         (req as any).user = decoded;
         next()
    }
    catch(error){
        return res.status(401).json({message:'Invalid or expired token'})
    }
};