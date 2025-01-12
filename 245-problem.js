// find the bug

function switch1(num){ // we can't use reserved keyword to declare variable name or function name : here switch is a reserved keyword
    console.log(~~num); // 1
}
switch1(1.2)

//* Note :- ~~ we use this to convert a floating number into integer number