import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from '../../config';

exports.handleGetUser = async () => {
  return {
    status: 200,
    name: 'Michael Scott',
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
    async (_accessToken, _refreshToken, profile, cb: any) => {
      try {
        console.log(profile);
        return cb(null, profile);
      } catch (e: any) {
        throw new Error(e);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
