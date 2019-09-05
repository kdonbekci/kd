require('dotenv').config();

const express = require('express');
const redis = require('redis')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const routes = require('./routes');
const auth = require('./auth')

const port = process.env.PORT || 3001;
const redisPort = process.env.REDIS_PORT || 6379
const env = process.env.NODE_ENV || 'development';
const database = process.env.DB_NAME;

const app = express();

let RedisStore = require('connect-redis')(session);
let client = redis.createClient({
    port: redisPort,
    password: process.env.REDIS_PASSWORD
});
app.use(
    session({
        store: new RedisStore({ client }),
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
        }
    })
);

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

let logStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: logStream }));

auth(app);
routes(app);

if (!module.parent) {
    app.listen(port, '0.0.0.0', (err) => {
      if (err) {
        console.error('application-err', err);
      }
      console.info(`Started in ${env === 'development' ? env : 'production'} mode on port ${port}.`);
    });
  }

// app.clo