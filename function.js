/// first function
function takeMyName(){
    console.log("Mustafizur");
    console.log("Rahman");
    console.log("Reza");
}
takeMyName();

/// 2nd function
function doubleIt(num){
    var result = num * 2; 
    console.log(result);
}
doubleIt(10);
doubleIt(100);
doubleIt(1000);

///3rd function
function tripleIt(number){
    result = number * 3;
    return result;
}
var first = tripleIt(10);
var second = tripleIt(100);
var third = tripleIt(1000);
console.log(first,second,third);
var total = first + second + third;
console.log(total);
