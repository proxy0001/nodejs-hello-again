// routes/index.js

var express = require('express');
var router = express.Router();

// get all posts
router.get('/1/post', function(req, res, next) {
  res.send('get all posts');
});
// get post by id
router.get('/1/post/:id', function(req, res, next) {
  res.send('get post by id: ' + req.params.id);
});
// new post
router.post('/1/post', function(req, res, next) {
  var o = {
    title: req.body.title,
    content: req.body.content
  };
  res.send('new post: ' + JSON.stringify(o));
});
// modify post
router.put('/1/post/:id', function(req, res, next) {
  res.send('modify post by id: ' + req.params.id);
});
// remove post
router.delete('/1/post/:id', function(req, res, next) {
  res.send('remove post by id: ' + req.params.id);
});

module.exports = router;
