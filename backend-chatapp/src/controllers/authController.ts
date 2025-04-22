import User from '../models/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { getSocketInstance } from '../utils/socket';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port: 587,
    auth: {
        user: process.env.ETHEREAL_EMAIL,
        pass: process.env.ETHEREAL_PASSWORD,
    }
});


export const verifyToken = (req: Request, res: Response) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ error: 'No token', result: false });
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        res.status(200).json({ message: 'Valid token', result: true });
        return;
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Invalid or expired token', result: false });
        return;
    }
};

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password, confirmPassword } = req.body;
    try {
        if(!username ||!email ||!password ||!confirmPassword) {
            res.status(400).json({ message : 'All fields are required' });
            return;
        }
        const usernameExists = await User.findOne({ username });
        if(usernameExists) {
            res.status(400).json({ message : 'Username not available' });
            return;
        }
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            res.status(400).json({ message : 'User already exists' });
            return;
        }
        if(password !== confirmPassword) {
            res.status(400).json({ message : 'Passwords do not match' });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, friends: [] });
        res.status(201).json({ message: 'User created successfully' });
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
    return;
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }
        const user = await User.findOne({ email });
        if(!user) {
            res.status(404).json({ message: 'Authentication failed! Invalid credentials' });
            return;
        } 
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            res.status(400).json({ message: 'Authentication failed! Invalid credentials' });
            return;
        }
        if(!JWT_SECRET) {
            res.status(500).json({ message: 'JWT secret not found' });
            return;
        }
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '2h' });
        res.cookie('token', token, { 
            httpOnly: true, 
            secure: false,
            sameSite: 'lax',
            path: '/'
        }); 
        const io = getSocketInstance();
        io.emit('userLoggedIn', { message: "User Logged In" });
        res.status(200).json({userId: user._id, message: 'LoggedIn successfully'});
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
    return;
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/'
    });
    res.status(200).json({ message: "Logged out successfully"});
}

export const sendChangePasswordEmail = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            res.status(404).json({ message: 'User not found' });
            return;
        } 
        if(!JWT_SECRET) {
            res.status(500).json({ message: 'JWT secret not found' });
            return;
        }
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '15m' });
        const mailBody = await transporter.sendMail({
            from: process.env.ETHEREAL_EMAIL,
            to: email,
            subject: 'Password Change Request',
            html: `
                <h1>Click on the link below to change your password</h1>
                <p>This link will expire in 15 minutes</p>
                <a href="http://localhost:5173/change-password?token=${ token }">Change Password</a>
            `,
        });
        res.status(200).json({ message: 'Email sent successfully' });
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
        return;
    }
    return;
}

export const changePassword = async (req: Request, res: Response): Promise<void> => {
    const { password, confirmedPassword } = req.body;
    if(!req.headers.authorization) {
        res.status(401).json({ message: 'Authorization token is required' });
        return;
    }
    const token = req.headers.authorization.split(' ')[1];
    try {
        if(password !== confirmedPassword) {
            res.status(400).json({ message: "Passwords do not match" });
            return;
        }
        if(!JWT_SECRET) {
            res.status(500).json({ message: 'JWT secret not found' });
            return;
        }
        const decodedData = jwt.verify(token, JWT_SECRET) as JwtPayload;
        if(!decodedData) {
            res.status(403).json({ message: 'Token expired or invalid' });
            return;
        }
        const user = await User.findOne({ email: decodedData.email });
        if(!user){
            res.status(404).json({ message: 'Invalid Credentials! User not found' });
            return;
        } 
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password changed successfully' });
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
        return;
    }
    return;
}