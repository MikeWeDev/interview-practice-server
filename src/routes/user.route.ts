import {Router} from "express";
import {createUserController,createTaskController,updateTaskController} from "../controllers/user.controller";
const router=Router();

router.post('/',createUserController)
router.post('/task/:id',createTaskController)
router.patch('/task/:id/:taskid',updateTaskController)

export default router;
