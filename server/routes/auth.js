import express from 'express';
import { signUp, login, logOut, signUpValidation } from '../controller/authController.js';
const router = express.Router();
router.post("/signUp", signUp);
router.post("/signUp/otp", signUpValidation);
router.post("/login", login);
router.post("/logOut", logOut);
export default router;