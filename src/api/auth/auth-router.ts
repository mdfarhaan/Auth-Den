import { getUser, registerUser } from './auth-controller';
import express from 'express';
import passport from 'passport';

const app = express.Router();

app.get('/', getUser);
app.post('/register', registerUser);

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log('RAYMOND');
    console.log(req.user);
    res.redirect('/healthcheck');
  }
);

export default app;
