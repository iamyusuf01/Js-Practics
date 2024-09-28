let a=10;
let b=10;
let c=12;

// 1 ways Methods
/* if(a==b && b==c && a==c){
    console.log(" Is Equilateral Triangle");
} else if( a!=b && b!=c && a!=c) {
    console.log("Is Scalene Triangle");
} else {
    console.log("Is Isosceles Triangle");
} */

//Another Methods

if(a==b && b==c && a==c){
    console.log("Is Equilateral Triangle");
} else if(a==b || b==c || a==c){
    console.log("Is Isosceles Triangle");
} else{
    console.log("Is Scalene Triangle");
}

