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

app.get('/microsoft', passport.authenticate('microsoft'));

app.get(
  '/microsoft/callback',
  passport.authenticate('microsoft', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=microsoft`);
  }
);

app.get('/discord', passport.authenticate('discord'));

app.get(
  '/discord/callback',
  passport.authenticate('discord', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=discord`);
  }
);

app.get('/spotify', passport.authenticate('spotify'));

app.get(
  '/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: config.CLIENT_URL }),
  function (req, res) {
    res.redirect(`${config.CLIENT_URL}?source=spotify`);
  }
);

export default app;
