import express from 'express';
import Loaders from './loaders';
import config from './config';
import Logger from './shared/logger';

async function startServer() {
  const app = express();
  await Loaders({ expressApp: app });

  app
    .listen(config.PORT, () => {
      Logger.info({
        level: 'info',
        message: `Running on port ${config.PORT}`,
      });
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
