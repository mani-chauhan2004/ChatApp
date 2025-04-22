import User from "../models/userModel";
import dotenv from 'dotenv';
dotenv.config();
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express"
export const sendDp = async(req: Request, res: Response) => {
    const token = req.cookies.token;
    if(!token) {
        res.status(404).json({ error: "Token not found" });
        return;
    }
    try{
        const decodedData = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const id = decodedData.id;
        if(id == null) {
            res.status(200).json({ error: "Request failed! No logged In user found" });
            return;
        }
        const user = await User.findOne({_id: id});
        if(!user) {
            res.send(404).json({ error: " The user does not exist"});
            return;
        }
        const dpLink = user.dp;
        if(!dpLink) {
            res.status(404).json({ error: "No dp found on the server" });
            return;
        }
        res.status(200).json({ message: "Dp extracted successfully", dpLink: dpLink });
    }catch(error: any) {
        if(error.name === 'TokenExpiredError') {
            res.status(402).json({ error: "Unverified auth detected. Please login again to continue" });
            return;
        }
        res.status(500).json({ error: " Unable to fetch the dp. Server encountered an error" });
    }
}

export const addFriend = async(req: Request, res: Response) => {
    const userId = req.body.id;
    const token = req.cookies.token;
    try {
        const user = await User.findById(userId);
        if(!user) {
            res.status(404).json({ error: "No user found with the above stated id" });
            return;
        }
        if(!token) {
            res.status(401).json({ error: "No access token found. Please login to continue" });
            return;
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        await User.findByIdAndUpdate(
            decodedData.id,
            { $addToSet: { friends: userId } },
            { new: true }
        );
        await User.findByIdAndUpdate(
            userId,
            { $addToSet: { friends: decodedData.id } },
            { new: true }
        );
        res.status(200).json({ message: "Friend added successfully" });
        return;
    }catch(error: any) {
        if(error.name === 'TokenExpiredError') {
            res.status(402).json({ error: "Unverified auth detected. Please login again to continue" });
            return;
        }
        console.error(error);
    }
    return;
}

export const getFriends = async(req: Request, res: Response) => {
    const token = req.cookies.token;
    if(!token) {
        res.status(401).json({ error: "No access token found. Please login to continue" });
        return;
    }
    
    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        // if(!decodedData) {
        //     res.status(402).json({ error: "Unverified auth detected. Please login again to continue" });
        //     return;
        // }
        const user = await User.findById(decodedData.id).populate('friends', 'dp _id username').exec();
        if(!user) {
            res.status(500).json({error: "Unwanted server error occoured. Please try again"});
            return;
        }
        res.status(200).json({message: "Unwanted server error occoured. Please try again", friends: user.friends});
    }catch(error: any) {
        if(error.name === 'TokenExpiredError') {
            res.status(402).json({ error: "Unverified auth detected. Please login again to continue" });
            return;
        }
        console.log(error);
        res.status(500).json({error: "Unwanted server error occoured. Please try again"});
    }
    return;
}

