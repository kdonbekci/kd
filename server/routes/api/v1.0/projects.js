const express = require('express');
const router = express.Router();
const Project = require('../../../models/Project');
const updateProjects = require('../../../services/github/update');


router.get('/', (req, res, next) => {
  Project.find({})
    .limit(10)
    .sort({ updatedAt: -1 })
    .then(projects => {
      payload = { success: true, data: projects };
      res.status(200).json(payload);
    })
    .catch(err => {
      let error = new Error('Could not fetch projects.');
      error.status = 500;
      error.internal = err.stack;
      error.redirect = '/';
      next(error);
    });
});

router.get('/update', (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    let error = new Error('You need to be logged in and an admin to update projects.');
    error.internal = 'Client attempted to update projects without login/admin';
    error.status = 401;
    error.redirect = '/login';
    return next(error);
  }
  updateProjects()
    .then(() => {
      let payload = { success: true };
      res.status(200).json(payload);
    })
    .catch(err => {
      let error = new Error('Trouble updating projects');
      error.status = 500
      error.internal = err.stack;
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  Project.findOne({ name: req.params.id })
    .then((project) => {
      if (!project) {
        let error = new Error(`Project "${req.params.id}" could not be found.`);
        error.status = 404;
        error.redirect = '/projects';
        return next(error);
      }
      let payload = { success: true, data: project };
      res.status(200).json(payload);
    })
    .catch(err => {
      let error = new Error('Could not fetch projects.');
      error.status = 500;
      error.internal = err.stack
      error.redirect = '/projects';
      return next(error);
    });
});

module.exports = router;