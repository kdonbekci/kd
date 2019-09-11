const express = require('express')
const router = express.Router()
const path = require('path');
const updateResume = require('../../../services/gdrive/update');

router.get('/', (req, res, next) => {
  if (!req.user) {
    let error = new Error('You need to be logged in to view resume.');
    error.internal = 'Client attempted to view resume without login';
    error.status = 401;
    error.redirect = '/login';
    return next(error);
  }
  res.download(path.join(__dirname, '../../../protected/CV_KaanDonbekci.pdf'), err => {
    if(err) {
      let error = new Error('Failed to transfer resume pdf.');
      error.status = 500;
      error.internal = err.stack;
      return next(error);
    }
  });
});

router.get('/update', (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    let error = new Error('You need to be logged in and an admin to update resume.');
    error.internal = 'Client attempted to update resume without login/admin';
    error.status = 401;
    error.redirect = '/login';
    return next(error);
  }
  updateResume()
    .then(() => {
      let payload = { success: true };
      res.status(200).json(payload);
    })
    .catch(err => {
      let error = new Error('Trouble updating resume');
      error.status = 500
      error.internal = err.stack;
      next(error);
    });
});

module.exports = router;