import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as GithubStrategy } from 'passport-github';
import config from '../../config';
import { handleCreateUser } from '../users/users-service';
import { googleFormatter, githubFormatter } from '../../shared/helper';

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.clientID,
      clientSecret: config.auth.google.clientSecret,
      callbackURL: `${config.api.url}/api/auth/google/callback`,
      passReqToCallback: true,
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        profile = googleFormatter(profile);
        await handleCreateUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        console.log('Error in passport.use', e.message);
        return cb(e, null);
      }
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: config.auth.github.clientID,
      clientSecret: config.auth.github.clientSecret,
      callbackURL: `${config.api.url}/api/auth/github/callback`,
      passReqToCallback: true,
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        profile = githubFormatter(profile);
        await handleCreateUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        console.log('Error in passport.use', e.message);
        return cb(e, null);
      }
    }
  )
);
