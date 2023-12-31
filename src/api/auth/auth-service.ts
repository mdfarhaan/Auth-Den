import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as GithubStrategy } from 'passport-github';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as MicrosoftStrategy } from 'passport-microsoft';
import { Strategy as DiscordStrategy } from 'passport-discord';
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import config from '../../config';
import { handleCreateUser } from '../users/users-service';
import {
  googleFormatter,
  githubFormatter,
  microsoftFormatter,
  discordFormatter,
  spotifyFormatter,
} from '../../shared/helper';

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

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.auth.twitter.consumerKey,
      consumerSecret: config.auth.twitter.consumerSecret,
      callbackURL: `${config.api.url}/api/auth/twitter/callback`,
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        console.log(profile);
        // profile = githubFormatter(profile);
        // await handleCreateUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        console.log('Error in passport.use', e.message);
        return cb(e, null);
      }
    }
  )
);

passport.use(
  new MicrosoftStrategy(
    {
      clientID: config.auth.microsoft.clientID,
      clientSecret: config.auth.microsoft.clientSecret,
      callbackURL: `${config.api.url}/api/auth/microsoft/callback`,
      scope: ['user.read'],
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        profile = microsoftFormatter(profile);
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
  new DiscordStrategy(
    {
      clientID: config.auth.discord.clientID,
      clientSecret: config.auth.discord.clientSecret,
      callbackURL: `${config.api.url}/api/auth/discord/callback`,
      scope: ['identify', 'email'],
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        profile = discordFormatter(profile);
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
  new SpotifyStrategy(
    {
      clientID: config.auth.spotify.clientID,
      clientSecret: config.auth.spotify.clientSecret,
      callbackURL: `${config.api.url}/api/auth/spotify/callback`,
      scope: ['user-read-email', 'user-read-private'],
    },
    async (accessToken, refreshToken, _, profile, cb) => {
      try {
        profile = spotifyFormatter(profile);
        await handleCreateUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        console.log('Error in passport.use', e.message);
        return cb(e, null);
      }
    }
  )
);
