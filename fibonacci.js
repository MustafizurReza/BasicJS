/// normal techniques
var a , b , c , n , i;

a = 0 , b = 1 , n = 10;
c = a+b ;

console.log(a);
console.log(b);

for( i = 2 ; i <= n ; i++){

    a = b;
    b = c;
    c = a+b;

    console.log(c);

}
/// using function
function fibonacci(num){

    a = 0;
    b = 1;

    fibo = a+b;

    console.log(a);
    console.log(b);

    for( i = 2 ; i <= num ; i++){

        a = b;
        b = fibo;
        fibo = a+b;
        console.log(fibo);
    
    }
    return fibo;
}
fibonacci(10);










