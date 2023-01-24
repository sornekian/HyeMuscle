var express = require('express');
var router = express.Router();
// const archiveCtrl = require('../controllers/archive');

router.get('/', function (req, res, next) {
    res.render('archives/index', { title: 'Archived Threads' });
  });

module.exports = router