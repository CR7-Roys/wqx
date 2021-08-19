// 文件系统
// var fs = require('fs');
//1.打开文件
// fs.openSync(path[,flags,mode])
// path 要打开文件的路径
// flage 打开文件要操作的类型
//     r 只读
//     w 可写的
// mode 设置文件的操作权限,一般不传

/* 2.向文件中写入内容
fs.writeSync(fd, string[, position[, encoding]])

fd 文件的描述符
string 要写入的内容
position 写入的初始位置
encoding 写入的编码,默认UTF-8
 */

// fs.open('./hello.txt','w',function(err,fd){
//     fs.write(fd,"hahaha",function(err){
//         fs.close(fd,function(err){
//             if(!err){
//                 console.log('文件已关闭');
//             }
//         })
//     })
// })
// console.log('程序执行');

var fs = require('fs');
// fs.access('myfile', function(err, access){
//     if(access&&access.isFile()) {
// 	console.log('文件夹存在');
//     } else {
//         fs.mkdirSync('myfile',function(){
//             console.log('文件夹已创建');
//         })
//         fs.writeFile('myfile/bb.txt','呵呵哒',function(error){
//              console.log('写入成功');
//          })
//     }
// });

if (fs.existsSync('myfile')) {
    console.log("文件已存在");
    fs.writeFile('myfile/f.txt', "今天天气真不错", function () {})
} else {
    fs.mkdirSync('myfile', function () {})
    fs.writeFile('myfile/ac.txt', "啊哈哈", function () {})
}