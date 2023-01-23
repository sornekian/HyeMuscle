var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');

router.get('/', threadsCtrl.index);
router.get('/new', threadsCtrl.new);
router.get('/:id', threadsCtrl.show);
router.post('/', threadsCtrl.create);	
router.delete('/:id', threadsCtrl.delete);







module.exports = router;