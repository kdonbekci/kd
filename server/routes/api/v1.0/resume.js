const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({msg: 'hey'});
});

// router.get('', )

// router.ge

module.exports = router;