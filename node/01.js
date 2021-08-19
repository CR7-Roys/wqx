// function add(a,b){
//     console.log(a+b);
// }
// var obj  ={
//     name:'路飞',
//     age:18
// }
// module.exports = obj;

var obj = {}//声明一个对象
obj.a = {}//重声明一个对象
var a = obj.a; 
console.log(obj.a===a);
a.name = '路飞';

a = new Object();
console.log(obj.a.name);
console.log(a.name);

// var a= 10;
// var b=a;
// a++;
// console.log(a);
// console.log(b);
// var obj=new Object()
// obj.name='佐助'
// var obj2 = obj;
// obj.name = '小樱'

// obj2 = null;
// console.log(obj.name);
// console.log(obj2);