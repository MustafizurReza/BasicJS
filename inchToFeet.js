//Using function
function inchToFeet(inch){

    var feet = inch / 12;
    return feet;

}

var person1 = inchToFeet(100);
console.log(person1);

var person2 = inchToFeet(120);
console.log(person2);

var person3 = inchToFeet(140);
console.log(person3);

// Normal techniques
var inch = 120;
var feet = inch / 12;
console.log(feet);