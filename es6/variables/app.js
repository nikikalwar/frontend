/* variables in javascript */

x=1;
console.log(x);//we dont have to worry about types

//previous to es6
 var myName="Niki";
 console.log(myName);
 //after es6
 someOne="Somebody";//string
 
 console.log(someOne);
 var myFav=24;//number
 var myArray=[1,2,3,4,5];//object
 var myArray2=[1,2,"Anyoene","somebody"];
 console.log(typeof(myFav));
 console.log(typeof(myArray));
 console.log(typeof myArray2);//array is of type object

 let count=1;

 function increase(){
     count=count+1;
     console.log(count);
 }
 increase();//calling a function
 increase();
 increase();

 var myName="Bob";
 var amChris=true;
 console.log(amChris);//sometimes we require truthy or falsy values while coding

 var myName="Rich";

 function sayName(){
     var myName="Richie";
     console.log(myName);//"Richie gets printed" due to myName
 }
 sayName();
 console.log(myName);//due to different scope like this is the global scope and Rich gets printed

 //Normally we dont use the same variable name in production to avoid errors-->eslinter will give the error while linting
 //var false=false is not valid since its a keyword and is reserved word
 


