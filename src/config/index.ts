require('dotenv').config();

export default {
  PORT: parseInt(process.env.PORT) || 8000,
  DB_URL: process.env.DB_URL,
  api: {
    url: process.env.API_URL,
    prefix: '/api',
  },
  auth: {
    google: {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
    github: {
      clientID: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    },
    twitter: {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_SECRET_KEY,
    },
    microsoft: {
      clientID: process.env.MICROSOFT_OAUTH_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_OAUTH_CLIENT_SECRET,
    },
    discord: {
      clientID: process.env.DISCORD_OAUTH_CLIENT_ID,
      clientSecret: process.env.DISCORD_OAUTH_CLIENT_SECRET,
    },
  },
  CLIENT_URL: process.env.CLIENT_URL,
};
