import { Router } from "express";
import multer from "../config/multerConfig";
import { uploadProfilePhoto } from "../controllers/uploadController";
const router = Router();

router.post("/profile-image", multer.single('profileImage'), uploadProfilePhoto);

export default router;