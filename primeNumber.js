/// normal techniques
var num = 11;
var count = 0;
for ( var i = 2; i < num; i++){
    checkPrime = num % i;
    if(checkPrime == 0){
        count++;
    }
    else{
        
    }
}
if(count == 0){
    console.log("Not Prime Number");
}
else{
    console.log("Prime Number");
}

/// using function
function prime(num){
    for ( var i = 2; i < num; i++){
        checkPrime = num % i;
        if(checkPrime == 0){
            count++;
        }
        else{
            
        }
    }
    if(count == 0){
        console.log("Not Prime Number");
    }
    else{
        console.log("Prime Number");
    }
}
prime(10);