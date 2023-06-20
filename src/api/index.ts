import { Router } from 'express';
import userRouter from './user/user-router';

export default (): Router => {
  const app: Router = Router();

  app.use('/user', userRouter);

  return app;
};
