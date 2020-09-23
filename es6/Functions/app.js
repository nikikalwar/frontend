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
/*
function nameFormatter(firstName,lastName,age){
    function formatNames(arg1,arg2){
            return arg1+" "+arg2;
    }

    //formats data into an object
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
    */

    //Advance functions in Javascript
        //arrow function in Javascript
/*
        var sayHi=()=>{
            console.log("Say Hi");
        }

        sayHi();
    
        const multiplier=(num1,num2)=>{
            return num1*num2;
        }

        console.log(multiplier(5,10));
*/
/*
const users=[
    {name:"Chris", age:60},
    {name:"Jane", age:30},
    {name:"Billy",age:45}
];

const userName=users.map(function(user){
    return user.name;
});
console.log(userName);//[ 'Chris', 'Jane', 'Billy' ]
*/
//another method to use arrow functions
//if single statement is there we can omit return keyword
/*
const squarer=num => num*num;
console.log(squarer(5));
*/
/*
function numberMultiplier(x,y){
    x=x||5;//picks the default value 3
    y=y||10;//picks the value 10
    return x*y;
}
console.log(numberMultiplier(3));//outputs 30
*/
/*
const num=(x=10,y=2)=>{
    x=x||5;
    y=y||3;
    return x*y;
}

console.log(num(2,3));//6
console.log(num(2));//6
console.log(num(2,3));
console.log(num());//if no parameters are passed it picks up default values
*/
/*
const intialString="Hi How are you".split(" ");
console.log(intialString);

*/

//checking out some more usage of functions
/*
const bankAccount={
    canSpend:true,
    balance:100
}

function purchaseItem(price,acct=bankAccount){
    if(price>acct.balance){
        acct.canSpend=false;
  
    }
        if(acct.canSpend===true){
            acct.balance-=price;
            console.log("you have made the purchase");
            console.log("your current balance is"+acct.balance);
        }
        else console.log("you cannot make the purchase");
        
}
purchaseItem(99);
purchaseItem(11);
purchaseItem(101);

*/



 
















