import { Request, Response } from "express";
import createUserService from "../services/user.service";

export default async function createUserController(req: Request, res: Response){
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
