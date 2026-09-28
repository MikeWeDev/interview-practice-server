import user from "../models/user"
import task from "../models/task"
export  async function createUserService(
  { username, password }: { username: string; password: string }
) {
   const existingUser=await user.findOne({
     username:username
   })
  if (existingUser) {
  throw new Error("Username already exists");
}
   const newUser = await user.create({
    username: username,
    password:password
   })
   return newUser
}

export  async function createTaskService(
  {title,description,status,id}:{title:string,description:string,status:"TODO" | "IN_PROGRESS" | "COMPLETED",id:string}
){
   
       const existinguser= await  user.findOne({
        _id:id
       })
       if (!existinguser) {
        throw new Error("User not found");
       }
    
       const newTask = await task.create({
  title,
  description,
  status:status,
  userId:id
});
   return newTask;
}

export async function updateTaskService(
  {title,description,status,id,taskid}:
{
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "COMPLETED";
  id: string;
  taskid: string;
} ){
      const canedit= await task.findOne({
  _id: taskid,
  userId: id
});
      if(!canedit){
        throw new Error("user not found as  a owner of that task")
      }

      const updateTask= await task.findOneAndUpdate({
        userId:id,
        _id:taskid
      },{
        title,
        description,
        status
      })

  return updateTask
}




export async function deleteTaskService({id,taskid}:{id:string , taskid:string}){
     const canDelete = await task.findOne({
         _id:taskid,
         userId:id
     })
     if(!canDelete){
       throw new Error ("user cannot delete teh task based on auth problem")
     }
     const deletetask= await  task.deleteOne({
         _id:taskid
     })
     return deletetask;
}