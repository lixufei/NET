#This is a .net pro

compile a cs file:
gmcs example.cs

then excute .exe file
mono example.exe


`install plugins
    npm install gulp --save-dev
    npm install gulp gulp-mocha --save-dev
    npm install chai --save-dev
    npm install gulp gulp-mocha gulp-util --save-dev
    npm install should --save-dev
    npm install angular --save-dev
    npm install gulp-sass --save-dev
    npm install font-awesome --save-dev      #font-awesome暂时还不会用
    npm install bootstrap@3 --save-dev


`撤回add的file
    git reset HEAD <file>

`html
    <meta charset="UTF-8">    #不能删掉,否则浏览器不能识别中文

`跑前端单元测试:
    run 'gulp mocha:unit'   #task in gulpfile.js

`跑后端的单元测试java:
    run './gradlew test'   #注意目录结构