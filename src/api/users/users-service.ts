import database from '../../loaders/database';
import Logger from '../../shared/logger';
import { userType } from '../../shared/types';
import { generateRandomInfo, calculateStats } from '../../shared/helper';

export const handleGetUser = async () => {
  const db = await database();
  const users = await db.collection('users').find({}).toArray();
  return users;
};

export const handleGetStats = async () => {
  try {
    const db = await database();
    // const users = await db
    //   .collection('users')
    //   .aggregate([
    //     {
    //       $group: {
    //         _id: null,
    //         averageFollowing: { $avg: '$following' },
    //         averageFollowers: { $avg: '$followers' },
    //         averagePosts: { $avg: '$posts' },
    //       },
    //     },
    //   ])
    //   .toArray();
    const users = await db.collection('users').find({}).toArray();
    const stats = calculateStats(users);
    return {
      sucess: true,
      code: 200,
      data: stats,
    };
  } catch (error) {
    Logger.log({
      level: 'error',
      message: `Error while getting users - ${error.message}`,
    });
    return { sucess: false, code: 500, message: error.message };
  }
};

export const handleCreateUser = async (data: userType) => {
  try {
    const profileInfo = generateRandomInfo();
    data = {
      ...data,
      ...profileInfo,
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
