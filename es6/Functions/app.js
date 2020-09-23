//functions

/*
"A function is a javascript procedure - a set of statements that performs a task or calculates a value.[...]";
--Mozilla develeoper network
*/
/*

function sayHi(userName,age){
    console.log("Hi "+userName+"age is "+age);

}
function addSum(a,b){
    console.log(a+b);
}
addSum(5,6);
const billy="Billy";
sayHi("Niki");
sayHi(billy,20);
*/
/*
function doDouble(num){
    return num*2;
}
console.log(doDouble(20));
//const num1=doDouble(30);
*/

//const myName="";
/*
function sayHi(){
    if(!myName){
        var myName="Bob";
    }
    console.log
}
const myName="Niki";//due to hoisting the variables are initialized with undefined variable

sayHi();

*/
/*
var squaredNumber = function(num) {
    return num*num;
}

var numberAdder=function(num1,num2){
    return num1+num2;
}

console.log(numberAdder(squaredNumber(5),10)); //outputs 35

*/
/*
let myNumber=100;

function addTwenty(num){
    return num+20;
}
console.log(addTwenty(myNumber));//returns the added number
console.log(myNumber);//returns 100--the number is not modified

let myString="Niki";

function changeString(anything){
    return "Hello "+anything; 
}
console.log(changeString(myString));//return Hello Niki
console.log(myString); //returns Niki-- the original string is not modified

*/
/*
const myInfo={name:"Chris", age:30};

function changeAge(myObj){
    myObj.age=100;
}

changeAge(myInfo);

console.log(myInfo);//age is modified to 100-->with objects we can mutuate the properties value
*/
/*
const myNumbers=[1,2,3,4,5];

function addToArray(myarr){
    return myarr.push(6);
}

console.log(myNumbers);///outputs original array
addToArray(myNumbers);
console.log(myNumbers);//outputs changed array

*/

//nested functions
/*
function squareAndMultiply(num1,num2){
    function squarer(x){
        return x*x;
    }
    function multiply(num1,num2){
        return num1*num2;
    }
    return squarer(num1)+multiply(num1,num2);
}

console.log(squareAndMultiply(2,4));
console.log(squareAndMultiply(6,6));
*/

function nameFormatter(firstName,lastName,age){
    function formatNames(arg1,arg2){
            return arg1+" "+arg2;
    }

    
    function dataFormatter(fullname,num){
        const formattedData={
            name:fullname,
            age:num
        }
        return formattedData;
    }
    const formattedName=formatNames(firstName,lastName);
    return dataFormatter(formattedName,age);

}

console.log(nameFormatter("chris","Jones",20));


















