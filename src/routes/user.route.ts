import {Router} from "express";
import {createUserController,createTaskController,updateTaskController,deleteTaskController} from "../controllers/user.controller";
const router=Router();

router.post('/',createUserController)
router.post('/task/:id',createTaskController)
router.patch('/task/:id/:taskid',updateTaskController)
router.delete('/task/:id/:taskid',deleteTaskController)


export default router;
