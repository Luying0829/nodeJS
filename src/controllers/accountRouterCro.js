const path = require('path');
const captchapng = require('captchapng')
//把函数暴露出去
module.exports.getLoginPage = (req,res)=>{  
    //控制器将对应的逻辑的代码最终响应   返回给路由 路由再返回给浏览器
    res.sendFile(path.join(__dirname,'../views/login.html'))
}

//把图片二维码的函数暴露出去
module.exports.getImgVcode = (req,res)=>{
    const random = parseInt(Math.random()*9000+1000);
    var p = new captchapng(80,30,random); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}