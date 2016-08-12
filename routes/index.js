// routes/index.js

var express = require('express');
var router = express.Router();

// get all posts
router.get('/1/post', function(req, res, next) {
  console.log('get all posts');
  res.send('get all posts');
});
// get post by id
router.get('/1/post/:id', function(req, res, next) {
  console.log('get post by id');
  res.send('get post by id');
});
// new post
router.post('/1/post', function(req, res, next) {
  console.log('new post');
  res.send('new post');
});
// modify post
router.put('/1/post/:id', function(req, res, next) {
  console.log('modify post');
  res.send('modify post');
});
// remove post
router.delete('/1/post', function(req, res, next) {
  console.log('remove post');
  res.send('remove post');
});

module.exports = router;
