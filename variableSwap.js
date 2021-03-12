///1
var a = 10;
var b = 11;
console.log("before swap",a,b);
var temp;
temp = a;
a = b;
b = temp;
console.log("after swap",a,b);
///2
var a = 100;
var b = 110;
console.log("before swap",a,b);
[a,b] = [b,a];
console.log("after swap",a,b);
///3
var a = 11;
var b = 19;
console.log("before swap",a,b);
a = a+b ;
b = a-b ;
a = a-b ;
console.log("after swap",a,b);
