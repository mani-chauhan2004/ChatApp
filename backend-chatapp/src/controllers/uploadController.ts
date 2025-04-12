import { Request, Response } from "express"
import {v2 as cloudinary} from 'cloudinary';
import { cloudinaryConfig } from "../config/cloudinaryConfig";
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadProfilePhoto = async (req: Request, res: Response) => {
    const filePath = req.file?.path;
    if(!filePath) res.status(404).json({message: "Can't upload! Invalid file format"});
    else {
        try{
            await cloudinary.uploader.upload(filePath);
            res.status(200).json({message: "File Uploaded Successfully"});
            fs.unlink(filePath, (error) => {
                if(error) {
                    console.log("Error removing server residual files");
                }
                else{
                    console.log("Residual Files Trashed");
                }
            })
        }catch(error) {
            console.log(error);
            res.send("Unexpected error occoured while uploading. Please try again");
        }
    }
}