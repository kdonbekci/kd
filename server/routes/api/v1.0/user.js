const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login/fire', passport.authenticate('google'));

router.get('/auth/callback', passport.authenticate('google', {
  failureRedirect: '/',
}), (req, res) => {
  res.json({'success': true})
});

router.get('/', (req, res, next) => {
  if(!req.user) { 
    let error = new Error('You need to be logged in to view here.');
    error.status = 401;
    error.redirect = '/user/login';
    return next(error);
  }
  let payload = {sucess: true, data: req.user};
  res.status(200).json(payload);
});

module.exports = router;