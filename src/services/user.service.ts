import user from "../models/user";

export async function checkstatusService(username: string) {
  const isValid = await user.findOne({
    username
  });

  return isValid;
}