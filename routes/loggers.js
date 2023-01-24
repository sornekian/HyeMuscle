var express = require('express');
var router = express.Router();
// const loggerCtrl = require('../controllers/logger');

router.get('/', function (req, res, next) {
    res.render('loggers/index');
  });

module.exports = router