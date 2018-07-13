const express  = require('express');
const path = require('path');

//创建一个路由对象
const accountRouter = express.Router();
//引入控制器文件
const accountRouterCro = require(path.join(__dirname,'../controllers/accountRouterCro.js'));
//使用路由  发送请求
//当路由接收到login的时候  做响应
accountRouter.get('/login',accountRouterCro.getLoginPage);

accountRouter.get('/vcode',accountRouterCro.getImgVcode);   
module.exports = accountRouter;
