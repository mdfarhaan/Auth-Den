import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from '../../config';

exports.handleGetUser = async () => {
  return {
    status: 200,
    name: 'Michael Scotdt',
  };
};
passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.clientID,
      clientSecret: config.auth.google.clientSecret,
      callbackURL: 'http://localhost:8000/api/auth/google/callback',
      passReqToCallback: true,
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        console.log('profile', profile);

        return cb(null, profile);
      } catch (e: any) {
        console.log('Error in passport.use', e.message);
        return cb(e, null);
      }
    }
  )
);
