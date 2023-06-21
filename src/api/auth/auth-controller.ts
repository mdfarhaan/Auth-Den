import { Request, Response } from 'express';
const { handleGetUser, handleRegisterUser } = require('./auth-service');

export const getUser = async (req: Request, res: Response) => {
  const data = await handleGetUser();
  res.json({ data });
};

export const registerUser = async (req: Request, res: Response) => {
  const data = await handleRegisterUser();
  res.json({ data });
};
