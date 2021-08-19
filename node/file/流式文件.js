const { on, once } = require('events');
var fs = require('fs');

// var ws = fs.createWriteStream('lufei.txt');

// 可以通过监听流的open或close事件来确定流的状态
// on(事件的字符串,回调函数)
// once(事件的字符串,回调函数)
//once 只是用一次
// ws.once('open',function(){
//     console.log('流打开了');
// })
// ws.once('close',function(){
//     console.log('流关闭了');
// })
// console.log(ws);

// // ws.open
// // ws.close
// //向流中输入内容
// ws.write('我想把这玩样染成绿色');
// ws.write('你看你要不要也染个');
// ws.write('我想把这玩样染成绿色');
// ws.write('我也想交野蛮女友');
// //关闭流
// ws.close();


// 同步异步用什么读取

// 这是简单的文件读取
// var val = fs.readFileSync('./lufei.text');
// console.log(val+" ");
// fs.readFile

//流式读取
var rs = fs.createReadStream('E:\\wwwqx\\wqx\\picture/4.jpg');
var ws = fs.createWriteStream('1.jpg')
rs.once('open',function(){
    console.log('可读流打开了');
})
rs.once('close',function(){
    console.log('可读流关闭了');
    ws.close();
})

ws.once('close',function(){
    console.log('写读流关闭');
})
//监听事件
rs.on("data",function(data){
   ws.write(data);
})

