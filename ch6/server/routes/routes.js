const express = require('express');
const router = express.Router()

router.use('/users', require('./users'));
router.use('/stories', require('./stories'));

module.exports = router;