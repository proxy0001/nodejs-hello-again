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

