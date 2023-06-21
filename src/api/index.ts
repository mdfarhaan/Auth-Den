import { Router } from 'express';
import authRouter from './auth/auth-router';

export default (): Router => {
  const app: Router = Router();

  app.use('/auth', authRouter);

  return app;
};
