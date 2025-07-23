import express from "express";
import {completestatus, loginUser, logoutUser, signupUser, updateUser,getuser } from "../controller/user.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();
router.get("/getuser",authMiddleware,getuser)


router.post("/signup",signupUser)
router.post("/login", loginUser);
router.post("/logout",authMiddleware,logoutUser)
router.post("/update-user",authMiddleware,updateUser)

router.post("/updatestatus/:mid",authMiddleware,completestatus)

export  default router