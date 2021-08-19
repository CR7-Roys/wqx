/*
     Buffer 缓冲区 
        buffer中存储的都是二进制数据,但是在显示的时候是以16进制显示

        16进制 00-ff 它实际是0-255
        2进制  000 000 00 - 111 111 11
        计算机 一个 0 或者一个 1 , 我们称为一位(bit)
        1byte(字节)=8bit
        1 kb = 1024byte
        1mb = 1024kb
        1GB = 1024MB
        1TB = 1024GB

        buffer中的一个元素,占用内存的一个字节
        buffer的大小一旦确定,则不能修改
*/
var str="哈"
var buf = Buffer.from(str);
console.log(buf.length);//占用内存大小
console.log(str.length);//字符串的长度
console.log(buf);


//创建一个指定大小的buffer
// var buf2 = new Buffer(10);
// console.log(buf2.length);//不推荐用

var buf2 = Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 556;
buf2[3] = 99;
//在控制台默认输出的是十进制,但是可以通过toString 转成16进制
console.log(buf2);

console.log(buf2[2].toString(16));
for(var i=0;i<buf2.leng;i++){
    console.log(buf2[i]);
}
//敏感数据指定一个大小的buffer,但是含有敏感数据
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);