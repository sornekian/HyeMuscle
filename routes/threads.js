var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');

router.get('/', threadsCtrl.index);
router.get('/new', threadsCtrl.new);
router.post('/', threadsCtrl.create);	








module.exports = router;