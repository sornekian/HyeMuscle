const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')


router.post('/threads/:id/comments', commentsCtrl.create)
router.delete('/comments/:id', commentsCtrl.delete)
router.get('/comments/:id/edit', commentsCtrl.edit)
router.put('/comments/:id', commentsCtrl.update)

module.exports = router