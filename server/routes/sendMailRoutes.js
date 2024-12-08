import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { sendMail, sendMailWithoutSignUp } from '../controller/mailController.js';
const router = express.Router();
router.post("/:accesstoken",sendMail)
router.post("/mail/:mail",sendMailWithoutSignUp)
export default router;