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
