//Normal techniques
var year = 2010;

if(year%4 == 0){
    console.log("Leap Year");
}
else{
    console.log("Normal year");
}

//with function
function leapYear(year){

    let check = year%4;
    if(check == 0){
        console.log("Leap Year");
    }
    else{
        console.log("Normal Year");
    }
    // return check;

}
leapYear(2020);
leapYear(2010);
leapYear(2008);