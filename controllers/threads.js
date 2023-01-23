const Thread = require("../models/thread");

module.exports = {
    index,
    new: newThread,
    create,
  };

function index(req, res) {
    Thread.find({}, function (err, threads) {
      res.render("threads/index", { title: "All Active Threads", threads });
    })
  };

function newThread(req, res) {
    res.render('threads/new')
  };
 
function create(req, res) {
    req.body.nowActive = !!req.body.nowActive;
  const thread = new Thread(req.body);
  thread.save(function(err) {
    if (err) return res.redirect('/threads/new');
    console.log(thread);
    res.redirect('/threads');
  })
 };
 
 