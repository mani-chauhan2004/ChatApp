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
    const decodedData = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const id = decodedData.id;
    console.log(id);
    if(id == null) {
        res.status(200).json({ error: "Request failed! No logged In user found" });
        return;
    }
    try{
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
    }catch(error) {
        res.status(500).json({ error: " Unable to fetch the dp. Server encountered an error" });
    }
}

