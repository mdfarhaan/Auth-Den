import { Router } from 'express';
import authRouter from './auth/auth-router';
import usersRouter from './users/users-router';

export default (): Router => {
  const app: Router = Router();

  app.use('/auth', authRouter);
  app.use('/users', usersRouter);
  return app;
};
