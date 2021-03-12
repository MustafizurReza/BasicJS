//using for 
var number = 5 , sum = 1;

for(var i = 5; i > 0; i--){
    
    sum = sum * i;
    console.log(sum);
}
//With functions
function fact(num){

    var facto = 1;
    for(var i = 1; i <= num; i++){
        facto = facto * i;
    }
    return facto;
}

var totalFact = fact(10);
console.log(totalFact);

//using while
var n = 1;
var f = 1;
while(n <= 4){
    f = f * n;
    n++;
    console.log(f);
}
