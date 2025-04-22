import { Router } from "express";
import { addFriend, getFriends, sendDp } from "../controllers/userController";

const router = Router();

router.get("/send-dp", sendDp);
router.post("/add-friend", addFriend);
router.get("/get-friends", getFriends);

export default router;