function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

for(let i = 1; i <=10; i++){
    let result = isEven(i)
    if(result == true){
        console.log(i, "is an even number");
    } else {
        console.log(i, "is an odd number");
    }
}

// let x = 10;
// let y = 20;
// let z = 30;

// console.log("X is", isEven(x));

// console.log("X is", isEven(y));

// console.log("X is", isEven(z));
// let num = 4;
// let result = isEven(num);
// if(result == true){
//     console.log(" is an even number");
// } else {
//     console.log(" is an odd number");
// }