import express from 'express';
import passport from 'passport';
import { getUser } from './auth-controller';
import config from '../../config';

const app = express.Router();

app.get('/', getUser);

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=google`);
  }
);

app.get('/github', passport.authenticate('github', { scope: [] }));

app.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=github`);
  }
);

export default app;
