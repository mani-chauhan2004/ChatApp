import express from 'express';
import { register, login, sendChangePasswordEmail, changePassword } from '../controllers/authController.js';
const authRoutes = express.Router();

authRoutes.post('/signup', register);
authRoutes.post('/login', login);
authRoutes.post('/forgot-password', sendChangePasswordEmail);
authRoutes.post('/change-password', changePassword);

export default authRoutes;