import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { sendMail, sendMailWithoutSignUp, sendMailWithoutSignUpCustom } from '../controller/mailController.js';
const router = express.Router();
router.post("/:accesstoken",sendMail)
router.post("/mail/:mail",sendMailWithoutSignUp)
router.post("/mail/custom/:mail",sendMailWithoutSignUpCustom)
export default router;