import {Router} from "express";
import {createUserController,createTaskController} from "../controllers/user.controller";
const router=Router();

router.post('/',createUserController)
router.post('/task/:id',createTaskController)

export default router;
