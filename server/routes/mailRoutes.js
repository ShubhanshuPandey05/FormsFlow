import express from 'express';
import { addMail, getMail, mailVerification } from '../controller/mailController.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();
router.post("/addmail",protectRoute,addMail)
router.get("/mailVerification/:token",mailVerification );
router.post("/getmail",protectRoute,getMail );
// router.post("/addmail",protectRoute,addMail)
// router.post("/mailVerification/:token",protectRoute,mailVerification );
export default router;