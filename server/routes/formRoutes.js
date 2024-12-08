import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { addForm, getForm, getFormData } from '../controller/formController.js';
const router = express.Router();
router.post("/addform",protectRoute,addForm)
router.post("/getform",protectRoute,getForm)
router.get("/getformdata/:name",protectRoute,getFormData)
export default router;