import { Request, Response } from 'express';
const { handleGetUser } = require('./user-service');

export const getUser = async (req: Request, res: Response) => {
  const data = await handleGetUser();
  res.json({ data });
};
