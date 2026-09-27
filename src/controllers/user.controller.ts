import { Request, Response } from "express";
import {createUserService,createTaskService} from "../services/user.service";

export  async function createUserController(req: Request, res: Response){
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  try {
    const newUser = await createUserService({
      username,
      password
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create user"
    });
  }
};


export  async function createTaskController(req: Request, res: Response) {
  try{
    const { title, description, status} = req.body;
          const {id}= req.params;
          if (!title || !status) {
            return res.status(400).json({
              message: "Title and status are required"
            });
          }
          if (typeof id !== "string") {
  return res.status(400).json({
    message: "Invalid user ID"
  });
}
          const createTask = await createTaskService({title,description,status,id});
          return res.status(201).json(createTask);
  }catch(err){
    return res.status(500).json({
      message: "Failed to create task"
    });
  }
}