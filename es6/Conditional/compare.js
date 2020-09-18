//Comparison operator

//== sign will do the type conversion and check if they are of same types

let numberFive=5;
console.log(typeof numberFive);

let stringFive="5";

console.log(typeof stringFive);

console.log(numberFive==stringFive);//true
console.log(numberFive===stringFive);//false

//this is happening since there is implicit conversion by JS