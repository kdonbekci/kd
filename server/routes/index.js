require('dotenv').config();

const path = require('path')
// const passport = require('passport');
// const reactApp =  require('./views/app');
// import { requireUserAPI, requireAdminAPI } from './middleware';
const version = process.env.API_VERSION || '1.0'
console.log(`API version: v${version}`)


const routes = (app) => {

    app.use('/api/resume', require(`./api/v${version}/resume`));
    app.use('/api/education', require(`./api/v${version}/education`));
    app.use('/api/projects', require(`./api/v${version}/projects`));
    app.use('/api/user', require(`./api/v${version}/user`));
    // app.use('/blog', require(`./api/v${version}/blog`));

    //   app.get('/login/google', passport.authenticate('google'));

    //   app.get('/login/google/return', passport.authenticate('google', {
    //     failureRedirect: '/login',
    //   }), (req, res) => {
    //     const target = req.cookies.target || '/';
    //     res.clearCookie('target', { path: '/' });
    //     return res.redirect(target);
    //   });

    //   app.get('/logout', require('./views/logout'));

    //   app.get('/api/github', require('./api/github'));
    //   app.get('/api/lastfm', require('./api/lastfm'));

    //   app.get('/api/resume', requireUserAPI, require('./api/resume'));

    //   app.get('/api/admin', requireAdminAPI, require('./api/admin'));

    //   reactApp(app); // set up react routes
};

module.exports = routes;