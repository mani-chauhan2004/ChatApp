import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
    console.log(req.body);
    const { username, email, password, confirmPassword } = req.body;
    try {
        if(!username ||!email ||!password ||!confirmPassword) return res.status(400).json({ message : 'All fields are required' });
        const usernameExists = await User.findOne({ username });
        if(usernameExists) return res.status(400).json({ message : 'Username not available' });
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message : 'User already exists' });
        if(password !== confirmPassword) return res.status(400).json({ message : 'Passwords do not match' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, friends: [] });
        res.status(201).json({ message: 'User created successfully' });
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) return res.status(400).json({ message: 'All fields are required' });
        const user = await User.findOne({ email });
        if(!user) return res.status(404).json({ message: 'Authentication failed! Invalid credentials' });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: 'Authentication failed! Invalid credentials' });
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.cookie('token', token, { 
            httpOnly: true, 
            secure: true,
            sameSite: 'strict'
        });

        res.status(200).json({ message: 'LoggedIn successfully'});
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}