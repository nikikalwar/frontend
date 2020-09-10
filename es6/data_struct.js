//types
//numbers
console.log(typeof(10));
console.log((10%5));
console.log(Math.PI);
console.log(parseInt("10"));
console.log(parseInt("hello"));//Nan
console.log(isNaN(1));

//Strings
//Sequence of Unicode characters
console.log("hello");
console.log(typeof("hello"));//string
console.log("hello"+"world");
console.log("superduper".length);
console.log("Chris".charAt(0));
console.log("I want to be uppercase!!!".toUpperCase());


//booleans
//basically evaluates to true or false
console.log(true);

var shouldBeTrue=true;
var shouldBeNull=false;

console.log(shouldBeTrue);
if(shouldBeTrue===true){
  console.log("this is true");
}
else console.log("this is not true");

var hasContent="sfjadfdijf";
console.log(Boolean(hasContent));
var hasNoContent="";
console.log(Boolean(hasContent));

var nonAssignedVariable;
console.log(nonAssignedVariable);

console.log(Boolean(nonAssignedVariable));
var isNotANumber=NaN;
console.log(typeof(isNotANumber));// output Number-->why is NaN?
console.log(Boolean(isNotANumber));
console.log(typeof(NaN));//apparently Nan is a type number
var isNull="NULL";
console.log(typeof(isNull));


//objects

//collection of name-value pairs
var myName={1:"Chris"};
console.log(typeof(myName));
var myObject=new Object();
myObject['1']="Chris";
myObject['2']="Sally";
myObject['3']="bob";

console.log(myObject);

var myOtherObject={
  1:"Chris",
  2:"Sally",
  3:"Jane",
};
console.log(myOtherObject);

myOtherObject['6']="Ashley";
var anotherObject={
  firstName:"Chris",
  lastname:"Smith",
  age:50,
  phone:"555-55-55555",
  numbers:{
    mobile:"5555555-1234",
    home:"5555-5555",
  },
  address:"123 Fake St.",
}
console.log(anotherObject);
console.log(anotherObject.numbers.mobile);
console.log(anotherObject.numbers["mobile"]);
//with an object the key provided should be unique
 