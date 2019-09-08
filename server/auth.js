const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/User')

const port = process.env.NODE_PORT || 3001;
const hostname = process.env.NODE_ENV == 'development' ? `http://localhost:${port}` : process.env.HOSTNAME;

const auth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new GoogleStrategy({
    clientID: process.env.NODE_ENV=='development' ? process.env.GOOGLE_CLIENT_ID_DEV: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.NODE_ENV=='development' ? process.env.GOOGLE_CLIENT_SECRET_DEV: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${hostname}/api/user/auth/callback`,
  },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ email: profile._json.email })
      .then((user) => {
        if (!user) { 
          return User.create( { ...profile._json } )
        }
        user.logins.push(Date.now());
        return user.save();
      })
      .then((user) => done(null, user)).catch((error) => done(error));
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

module.exports = auth;