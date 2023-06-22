import { getUser } from './users-controller';
import express from 'express';

const app = express.Router();

app.get('/', getUser);

export default app;
