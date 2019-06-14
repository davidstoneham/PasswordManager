'use strict';

import * as mongoose from 'mongoose';
import { RateLimiterMongo } from 'rate-limiter-flexible';

const opts = {
  storeClient: mongoose.connection,
  points: 5, // Number of points
  duration: 1, // Per second(s)
};

const rateLimiterMongo = new RateLimiterMongo(opts);

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiterMongo.consume(req.clientIp)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send('Too Many Requests');
    });
};

export default rateLimiterMiddleware;