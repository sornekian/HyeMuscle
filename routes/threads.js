var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', threadsCtrl.index);
router.get('/new', ensureLoggedIn, threadsCtrl.new);
router.post('/', ensureLoggedIn, threadsCtrl.create);	
router.delete('/:id', ensureLoggedIn, threadsCtrl.delete);
router.get('/:id/edit', ensureLoggedIn, threadsCtrl.edit);
router.put('/:id', ensureLoggedIn, threadsCtrl.update);
router.get('/:id', threadsCtrl.show);

module.exports = router;