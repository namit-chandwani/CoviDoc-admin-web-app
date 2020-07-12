const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('History Page');
});

module.exports = router;
