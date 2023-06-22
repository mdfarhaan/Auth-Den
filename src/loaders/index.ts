import Logger from '../shared/logger';
import Express from 'express';
import Database from './database';
import express from './express';

export default async ({ expressApp }: { expressApp: Express.Application }) => {
  await Database();
  Logger.log({
    level: 'info',
    message: 'Connection to database successful',
  });

  await express({ app: expressApp });
  Logger.log({
    level: 'info',
    message: 'Express loaded',
  });
};
