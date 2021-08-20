
// http 协议涉及的几个概念
// 请求 浏览器向服务器要数据
// 响应 服务器给浏览器发数据
// 端口 可以是一个IP,也可以是多个域名


var http = require('http');
const { Session } = require('inspector');
var ser = http.createServer(function(req,res){
    // console.log(req,res);
    res.end('hello world');
});
ser.listen(3000);

// mvc模式 mvvm模式 
/* 
cookie Session
html5的本地缓存
localStorage
sessionStorage

http 常用的四种方法,用来完成数据的增,删改,查
get 方法 获取数据
post方法 新增数据
put 方法 修改数据
delete 方法 删除数据

http状态码
100-199 信息性状态码
200-299 成功状态码
300-399 重定向状态码
400-499 客户端状态码 
500-599 服务器状态码

*/