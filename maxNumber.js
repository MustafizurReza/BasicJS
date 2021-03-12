/// using method
var a,b,c,x,y,z;

a = 1;
b = 2;
c = 3;
x = 7;
y = 8;
z = 9;

var max = Math.max(a,b,c,x,y,z);
console.log(max);

/// noraml technique
var a,b,c;

a = 1;
b = 2;
c = 3;

if(a>b){
    if(a>c){
        console.log("a is greater");
    }
}
else if(b>c){
    console.log("b is greater");
}
else{
    console.log("c is greater");
}