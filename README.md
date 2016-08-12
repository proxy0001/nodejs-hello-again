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

## test run
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
   

