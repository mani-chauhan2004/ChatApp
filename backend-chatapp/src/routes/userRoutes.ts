import { Router } from "express";
import { sendDp } from "../controllers/userController";

const router = Router();

router.get("/send-dp", sendDp);

export default router;