const Thread = require("../models/thread");

module.exports = {
    index,
    show,
    new: newThread,
    create,
    delete: deleteThread,
  };

function index(req, res) {
    Thread.find({}, function (err, threads) {
      res.render("threads/index", { title: "All Active Threads", threads });
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
   const thread = new Thread(req.body);
  thread.save(function(err) {
    if (err) return res.redirect('/threads/new');
    res.redirect('/threads');
  })
 };

function deleteThread(id) {
  return Thread.findByIdAndDelete(id)
    res.redirect('/threads');
  
}