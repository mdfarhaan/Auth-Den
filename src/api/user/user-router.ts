import { getUser, registerUser } from './user-controller';
import express from 'express';
import passport from 'passport';

const app = express.Router();

app.get('/', getUser);
app.post('/register', registerUser);
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log('RAYMOND');
    res.redirect('/healthcheck');
  }
);

export default app;
