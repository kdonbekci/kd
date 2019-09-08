require('dotenv').config({ path: '../.env' })

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

const env = process.env.NODE_ENV || 'development';

const app = express();

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient({
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

redisClient.on('connect', () => {
  console.info('Redis client connected to server.')
})
.on('error', err => console.error('Redis error:', err));


app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);

mongoose.connection.openUri(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
  .once('open', () => {
    console.info('MongoDB client onnected to server.');
  })
  .on('error', err => console.error('MongoDB error:', err));

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let logStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: logStream }));

auth(app);
routes(app);

if (!module.parent) {
  app.listen(process.env.NODE_PORT, '0.0.0.0', (err) => {
    if (err) {
      console.error('Node error:', err);
    }
    console.info(`Started in ${env === 'development' ? env : 'production'} mode on port ${process.env.NODE_PORT}.`);
  });
}

// app.clo