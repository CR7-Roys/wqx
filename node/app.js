// 1. Web服务器的api
// 2.实时的多人游戏
// 3.后端web服务
// 4.基于web的应用
/* 
在node中,一个js就是一个模块,
每一个js代码都是独立运行在一个函数中,而不是全局作用域,
在node中有一个全局对象,global,它的作用和网页中的window一样
*/

// exports 该对象用来将变量或函数暴露到外部
// require 用来引入外部的模块
// module 代表的是当前模块本身
// exports 就是modult的属性
// _filename 当前模块的完整路径
// _dirname  当前模块所在的文件夹的完整路径
// function (exports,require,module,_filename,_dirname){

// }
var obj = require('./01.js');

console.log(obj);

// 通过exports只能使用.的方式向外暴露内部变量
// 通过module.exports 既可以通过.的方式也可以直接赋值





//node模块化
// 1.第三方模块
// var dateFormat = require("dateformat");
// var now = new Date();
// var a = dateFormat(now,"isoDateTime");
// var b = dateFormat("longTime");
// var c = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// var d = dateFormat("Jun 9 2007", "fullDate");
// console.log(a,b,c,d);
// // 2.自定义模块
// var add = require('./01.js');

// add(20,2);
// // 3.核心模块

// console.log(add);
// var a=10
// var b=100
// module.exports.add = function(){
//     console.log(222);
// }

/* npm -v 查看版本
npm search 包名 搜索包模块
npm install 包名 在当前目录安装包
npm install 包名 -g 全局模式安装包
npm remove 包名 删除一个包模块
npm install 本地路径 从本地安装
npm install 包名 --registry="地址"

json里 没有注释,不要就直接删掉
包结构
    

*/


