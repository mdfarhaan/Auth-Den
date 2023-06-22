import { Request, Response } from 'express';
const { handleGetUser, handleGetStats } = require('./users-service');

export const getUser = async (req: Request, res: Response) => {
  const users = await handleGetUser();
  res.json({ users });
};

export const getStats = async (req: Request, res: Response) => {
  const data = await handleGetStats();
  res.status(data.code).json(data);
};
