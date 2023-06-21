import { getUser } from './auth-controller';
import express from 'express';
import passport from 'passport';

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
    console.log(req.user);
    res.redirect('/healthcheck');
  }
);

app.get('/github', passport.authenticate('github', { scope: [] }));

app.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    console.log(req.user);
    res.redirect('/healthcheck?source=github');
  }
);

export default app;
