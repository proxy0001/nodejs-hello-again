#step log

## create a default project

use [express-generator](https://www.npmjs.com/package/express-generator)  
there is a folder would be created named nodejs-hello-again

<!-- code block -->
    express nodejs-hello-again

## go to project folder

<!-- code block -->    
    cd nodejs-hello-again

## git init with github

<!-- code block -->
    echo "# nodejs-hello-again" >> README.md
    git init
    git add .
    git commit -m "first commit"
    git remote add origin https://github.com/proxy0001/nodejs-hello-again.git
    git push -u origin master

## install package

<!-- code block -->
    npm install

## test run on localhost:3000
use [nodemon](https://www.npmjs.com/package/nodemon)
<!-- code block -->
    nodemon start

## create restful api

| Method | API Path | Description
|:-----|:-----|:-----
| GET | /1/post | 讀取所有文章資訊
| GET | /1/post/:id | 讀取指定文章(ID)
| POST | /1/post | 建立新標題，新文章
| PUT | /1/post/:id | 修改指定資訊
| DELETE | /1/post/:id | 刪除指定文章

update routes/index.js
<!-- code block -->
    // get all posts
    router.get('/1/post', function(req, res, next) {
      res.send('get all posts');
    });
    // get post by id
    router.get('/1/post/:id', function(req, res, next) {
      res.send('get post by id');
    });
    // new post
    router.post('/1/post', function(req, res, next) {
      res.send('new post');
    });
    // modify post
    router.put('/1/post/:id', function(req, res, next) {
      res.send('modify post');
    });
    // remove post
    router.delete('/1/post:id', function(req, res, next) {
      res.send('remove post by id');
    });
   
## test api
use [Postman](http://www.getpostman.com/) OR [curl](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/curl.1.html)  

[How to test a REST api from command line with curl](http://www.codingpedia.org/ama/how-to-test-a-rest-api-from-command-line-with-curl/)  

[使用curl指令測試REST服務](http://blog.kent-chiu.com/2013/08/14/testing-rest-with-curl-command.html)

<!-- code block -->
    curl -i -X GET http://localhost:3000/1/post
    curl -i -X POST http://localhost:3000/1/post
    curl -i -X PUT http://localhost:3000/1/post
    curl -i -X DELETE http://localhost:3000/1/post

## send params and get params

1. req.params: url variable
2. req.body: http paramaters

update routes/index.js
<!-- code block -->
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
      res.send('new post <br>' + JSON.stringify(o));
    });
    // modify post
    router.put('/1/post/:id', function(req, res, next) {
      res.send('modify post by id: ' + req.params.id);
    });
    // remove post
    router.delete('/1/post/:id', function(req, res, next) {
      res.send('remove post by id: ' + req.params.id);
    }); 

curl test code
<!-- code block -->
    curl -i -X GET http://localhost:3000/1/post
    curl -i -X GET http://localhost:3000/1/post/myid
    curl -i -X POST http://localhost:3000/1/post -d "title=my title&content=my content"
    curl -i -X PUT http://localhost:3000/1/post/myid
    curl -i -X DELETE http://localhost:3000/1/post/myid
