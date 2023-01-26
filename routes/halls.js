var express = require('express');
var router = express.Router();
// const hallsCtrl = require('../controllers/halls');

router.get('/', function (req, res, next) {
    res.render('halls/index', { title: 'Hall of Cars' });
  });

module.exports = router