require('dotenv').config();

export default {
  PORT: parseInt(process.env.PORT) || 8000,
  DB_URL: process.env.DB_URL,
  api: {
    prefix: '/api',
  },
  auth: {
    google: {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
  },
};
