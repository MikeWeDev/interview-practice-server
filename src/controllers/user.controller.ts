import { Request, Response } from "express";
import { checkstatusService } from "../services/user.service.js";

export async function checkstatusController(
  req: Request,
  res: Response
) {
  try {
    const { username } = req.body;

    const result = await checkstatusService(username);

    return res.status(200).json({
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    });
  }
}