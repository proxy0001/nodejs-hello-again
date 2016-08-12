// routes/index.js

var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var extend = require('util')._extend;

var model = {
  posts: {},
  postProto: {
    id: '',
    title: '',
    body: '',
    user: {
      login: 'proxy0001'
    }
  },
  createId: function createId (str) {
    var data = (+new Date + Math.floor( Math.random() * 999999 ) + str);
    var id = crypto.createHmac('md5', 'xyz').update(data).digest('hex');
    return id;
  },
  getPost: function getPost (o) {
    if ( typeof o === 'object' && this.posts.hasOwnProperty(o.id) ) {
      return this.posts[o.id];
    }
    return this.posts;
  },
  newPost: function newPost (o) {
    o.id = this.createId(o.body);
    this.posts[o.id] = extend(this.postProto, o);
    return this;
  },
  modifyPost: function modifyPost (o) {
    if ( !this.posts.hasOwnProperty(o.id) ) {
      return false;
    }    

    var p = this.posts[o.id];
    p.title = o.title;
    p.body = o.body;
    return this;
  },
  removePost: function removePost (o) {
    if ( !this.posts.hasOwnProperty(o.id) ) {
      return false;
    }       
    delete this.posts[o.id];
    return this;
  }  
};

// get all posts
router.get('/1/post', function(req, res, next) {
  res.send( model.getPost() );
});
// get post by id
router.get('/1/post/:id', function(req, res, next) {
  res.send( model.getPost({
    id: req.params.id
  }) );
});
// new post
router.post('/1/post', function(req, res, next) {
  var o = model.newPost({
    title: req.body.title,
    body: req.body.body
  });
  res.send(model.posts);
});
// modify post
router.put('/1/post/:id', function(req, res, next) {
  var o = model.modifyPost({
    id: req.params.id,
    title: req.body.title,
    body: req.body.body
  });
  res.send(model.posts);
});
// remove post
router.delete('/1/post/:id', function(req, res, next) {
  model.removePost({
    id: req.params.id
  });
  res.send(model.posts);
});

module.exports = router;
