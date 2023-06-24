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
  passport.authenticate('google', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=google`);
  }
);

app.get('/github', passport.authenticate('github', { scope: [] }));

app.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=github`);
  }
);

app.get('/twitter', passport.authenticate('twitter'));

app.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=twitter`);
  }
);

export default app;
