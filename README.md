#step by step

## create a default project by express-generator

* need express-generator
* there is a folder would be created named nodejs-hello-again

<!-- code block -->
    npm install express-generator -g
    express nodejs-hello-again

## open the folder

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
