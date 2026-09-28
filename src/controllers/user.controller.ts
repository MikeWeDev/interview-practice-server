import { Request, Response } from "express";
import {createUserService,createTaskService,updateTaskService,deleteTaskService} from "../services/mongoose/user.service";

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
    console.error(error);
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

export async function updateTaskController(req:Request,res: Response){

   try{
    const {id,taskid} = req.params;
         const { title, description, status } = req.body;
         if (!title || !description ||!status){
          return res.status(400).json({
            message: "Title, description and status are required"
          })
         }
         if(!id){
          return res.status(400).json({
            message:"id is required"
          })
         }
          if (typeof id !== "string" || typeof taskid != "string") {
  return res.status(400).json({
    message: "Invalid user ID"
  });
}
         const updatetask= await updateTaskService({title,description,status,id,taskid});
         return res.status(200).json(updatetask);
   }catch(err){
    console.error(err)
    return res.status(500).json({
      message:"failed to update a task"
    });
   }

}

export async function deleteTaskController(req:Request,res: Response){

   try{
    const {id,taskid} = req.params;
       
         if(!id){
          return res.status(400).json({
            message:"id is required"
          })
         }
          if (typeof id !== "string" || typeof taskid !="string" ) {
  return res.status(400).json({
    message: "Invalid user ID"
  });
}
         const deleteTask= await deleteTaskService({id,taskid});
         return res.status(200).json(deleteTask);
   }catch(err){
    console.error(err)
    return res.status(500).json({
      message:"failed to delete a task"
    });
   }

}