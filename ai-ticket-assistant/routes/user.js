import express from "express";
import {loginUser, logoutUser, signupUser, updateUser } from "../controller/user.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/update-user",authMiddleware,updateUser)

router.post("/signup",signupUser)
router.post("/login", loginUser);
router.post("/logout",authMiddleware,logoutUser)


export  default router