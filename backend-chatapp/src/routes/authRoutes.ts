import express, { Router } from 'express';
import { register, login, sendChangePasswordEmail, changePassword, logout } from '../controllers/authController';
const authRoutes: Router = express.Router();

authRoutes.post('/signup', register);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);
authRoutes.post('/forgot-password', sendChangePasswordEmail);
authRoutes.post('/change-password', changePassword);

export default authRoutes;