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

 //let and const keyword
 var Hi=true;
 
 if(Hi==true){
     var myName="Chris";

 }
        console.log(myName);//still able to access outside of the scope which is an issue since we dont want anyone accessing the function values
        
//
function sayHi(){
    var sayHi=true;
    if(sayHi===true){
        var myName="Chris";

    }
}
console.log(myName);//gets printed as "Chris" 

//linter will be throwing an error on this
//so in simple terms saying we have access to variables out of the scope

//ES6 includes let which allows the use of scope

function sayHi(){
    let sayHi=true;
    if(shouldSayHi===true){
        let myName1="Chris";
    }
}
//console.log(myName1);//throws error myName1 is not defined in contrast to the myName when used with var keyword

//const keyword
//we are not allowed to reassingn the variable
//with the const keyword

const user="Someone";
//user="Somebody";//throws an error
 // let and const which were introduced with ES6 

 const myArray1=[1,2,3,4,5];
 myArray1[2]=0;
 console.log(myArray1);//successfully modified the array value since references are stored in array 

 //objects

 const myObject={name:"Chris"}
 console.log(myObject);
 myObject.name="Bob";// the object is immutable but the data can be modified inside the object


 console.log(myObject);
/*
 function SayHi(){
     if(true){
         const myName="Jim";
     }
     console.log(myName);//Jim
 }
//console.log(myName)-->error
*/



