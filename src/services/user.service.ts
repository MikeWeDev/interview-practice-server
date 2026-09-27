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