import passport from 'passport';
import GoogleAuth from 'passport-google-oauth2';
import config from '../../config';

exports.handleGetUser = async () => {
  return {
    status: 200,
    name: 'Michael Scott',
  };
};
const GoogleStrategy = GoogleAuth.Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.clientID,
      clientSecret: config.auth.google.clientSecret,
      callbackURL: 'http://localhost:8000/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        console.log('Creating new user...');

        done(null, profile);
      } catch (error) {
        done(null, profile);
      }
    }
  )
);
