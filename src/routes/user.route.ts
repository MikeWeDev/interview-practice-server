import {Router} from "express";
import {checkstatusController} from "../controllers/user.controller";
const router=Router();

router.post('/checkstatus',checkstatusController)


export default router;
