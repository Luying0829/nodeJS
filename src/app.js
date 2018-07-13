//用express框架开启web服务
const express = require('express');
const path = require('path');

const app = express();
//node中处理静态页面这个唯一的内置中间件
app.use(express.static(path.join(__dirname,'statics')))

//使用路由中间件
const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
app.use('/account',accountRouter);  

app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
    }
    console.log('ok');
})
