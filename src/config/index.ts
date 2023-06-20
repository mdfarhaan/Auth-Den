require('dotenv').config();

export default {
  PORT: parseInt(process.env.PORT) || 8000,
  DB_URL: process.env.DB_URL,
  api: {
    prefix: '/api',
  },
};
