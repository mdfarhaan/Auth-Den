import { getUser, getStats } from './users-controller';
import express from 'express';

const app = express.Router();

app.get('/', getUser);
app.get('/stats', getStats);

export default app;
