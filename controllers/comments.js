const Thread = require('../models/thread')

module.exports = {
    new: newComment,
    create,
    delete: deleteComment,
};
function newComment(req, res) {
    res.render(`/threads/${thread._id}`)
};
function create(req, res) {
    Thread.findById(req.params.id, function(err, thread) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        thread.comments.push(req.body)
        thread.save(function(err) {
        console.log(thread)
            res.redirect(`/threads/${thread._id}`)
        })
    })
};
async function deleteComment(req, res, next) {
    try {
        const thread = await Thread.findOne({'comments._id': req.params.id})
        if (!thread) return res.redirect('/threads')
        thread.comments.remove(req.params.id)
        await thread.save()
        res.redirect(`/threads/${thread._id}`)
        } catch(err) {
        return next(err)
    }
};