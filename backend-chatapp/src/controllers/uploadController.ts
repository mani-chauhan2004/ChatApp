import { Request, Response } from "express"
import {v2 as cloudinary} from 'cloudinary';
import jwt from "jsonwebtoken";
import fs from 'fs';
import dotenv from 'dotenv';
import User from "../models/userModel";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadProfilePhoto = async (req: Request, res: Response) => {
    const filePath = req.file?.path;
    if(!filePath) {
        res.status(404).json({message: "Can't upload! Invalid file format"});
        return;
    }
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    if(!secret) {
        res.status(500).json({ 
            message: "The server dosen't include the secret"
        });
        return;
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, email?: string };
        const userID = decoded.id;
        const uploadData = await cloudinary.uploader.upload(filePath);
        console.log(uploadData);
        res.status(200).json({message: "File Uploaded Successfully"});
        fs.unlink(filePath, (error) => {
            if(error) {
                console.log("Error removing server residual files");
            }
            else{
                console.log("Residual Files Trashed");
            }
        });
        const savedUser = await User.findByIdAndUpdate(userID, { dp: uploadData.secure_url });
    }catch(error: any) {
        if(error.name === 'TokenExpiredError') {
            res.status(402).json({ error: "Unverified auth detected. Please login again to continue" });
            return;
        }
        res.send("Unexpected error occoured while uploading. Please try again");
    }
}