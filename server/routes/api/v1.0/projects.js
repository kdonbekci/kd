const express = require('express');
const router = express.Router();

const Project = require('../../../models/Project');

router.get('/', (req, res) => {
  let newProject = new Project({ 'name': 'Kaan' });
        console.log('saving');
        newProject.save((err, user) => {
            if (err) console.error(err);
            res.json(user)
        });
});

// router.get('', )

// router.ge

module.exports = router;