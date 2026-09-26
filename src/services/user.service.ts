import user from "../models/user"
export default async function createUserService(
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