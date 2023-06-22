import database from '../../loaders/database';
import Logger from '../../shared/logger';
import { userType } from '../../shared/types';

export const handleGetUser = async () => {
  const db = await database();
  const users = await db.collection('users').find({}).toArray();
  return users;
};

export const handleCreateUser = async (data: userType) => {
  try {
    data = {
      ...data,
      createdAt: new Date(),
    };
    const db = await database();
    await db.collection('users').insertOne(data);
    Logger.log({
      level: 'info',
      message: `User created successfully`,
    });
    return {
      sucess: true,
      code: 200,
    };
  } catch (error) {
    Logger.log({
      level: 'error',
      message: `Error while creating user - ${error.message}`,
    });
    return { sucess: false, code: 500, message: error.message };
  }
};
