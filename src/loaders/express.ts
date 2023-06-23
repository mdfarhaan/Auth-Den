import express from 'express';
import passport from 'passport';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../api';
import config from '../config';

export default ({ app }: { app: express.Application }): void => {
  app.get('/healthcheck', (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });

  app.use(
    session({
      secret: 'cookie_secret',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 45,
      handler: (req, res, next) => {
        res.status(429).json({
          success: false,
          message: 'Too many requests in a short time. Please try in a minute.',
        });
      },
    })
  );

  app.use(config.api.prefix, routes());

  app.use('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Welcome to the Auth Den API!',
    });
  });
};
