const Thread = require("../models/thread");

module.exports = {
    index,
    show,
    new: newThread,
    create,
    delete: deleteThread,
    edit,
    update,
  };
function index(req, res) {
    Thread.find({}, function (err, threads) {
      res.render("threads/index", { title: "All Active Threads", threads });
    })
    Thread.find({})
    .sort({ "createdAt": -1 })
    .exec(function (err, threads) {
        console.log(threads)
        res.render("threads/index", { threads })
    })
};
function show(req, res) {
    Thread.findById(req.params.id, function(err, thread){
      res.render("threads/show", { title: "Thread Detail", thread });
    })
};
function newThread(req, res) {
    res.render('threads/new')
}; 
function create(req, res) {
  req.body.user = req.user._id
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
    
  const thread = new Thread(req.body);
  thread.save(function(err) {
    if (err) return res.redirect('/threads/new');
    res.redirect('/threads');
  })
};
function deleteThread(req, res, next) {
  Thread.findByIdAndDelete(req.params.id, function (err, thread) {
    if (err) { return next(err) }
    res.redirect('/threads')
  })
};
function edit(req, res, next) {
  Thread.findById(req.params.id, function (err, thread) {
      if (err) { return next(err); }
      res.render('threads/edit', { thread })
  })
};
function update(req, res, next) {
  const updatedThread = {
    title: req.body.title,
    content: req.body.content,
  }
  Thread.findByIdAndUpdate(req.params.id, updatedThread, { new: true }, function (err, thread) {
    if (err) { return next(err) }
    res.redirect(`/threads/${thread._id}`)
  })
};