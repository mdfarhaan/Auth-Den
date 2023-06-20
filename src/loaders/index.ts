import Logger from '../shared/logger';
import Express from 'express';
import express from './express';

export default async ({ expressApp }: { expressApp: Express.Application }) => {
  await express({ app: expressApp });
  Logger.log({
    level: 'info',
    message: 'Express loaded',
  });
};
