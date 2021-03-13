var numbr = [1,2,3,4,5,19,6,7,8,9,10,1,4,7,9,4,5,7,9];
var unique = [];

for(var i = 0; i < numbr.length; i++){

    var element = numbr[i];

    var index = unique.indexOf(element);
    
    if( index== -1){
        unique.push(element);
    }
}
console.log(unique);