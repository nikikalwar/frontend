//Use of var keyword
/*Remove this line to view the usage of var keyword

function newName(){
    var myName="Niki";
    if(typeof myName==="string"){
        console.log(myName);
    }
    
}
//eg1
newName();
console.log(myName);//this will give an error "myName is not defined"

//apparently in ES6 this will go through without an error and the value will be modified even its declared inside
//a function 
myName="Chris";
console.log(myName);

*/

//so here we are dealing with variable scope problems
//ES6 introduced the concept of let and const keyword to deal with the scope problems
//let keyword
/* remove this line to see the usage of let
function newName(){
    let myName="Niki";
    if(myName==="Niki"){
        let name="Chris";
        console.log(myName);
    }
    console.log(name);
}
newName();//getting an error since name is declared using let keyword
//and the scope is limited to the particular function where the variable is declared

*/

//variables should not be modified and scope should be limited to that particular function
/*Remove to demonstrate use of const keyword
function newName(){
    const name="Niki";
    if(name==="Niki")
    console.log(name);
   // name="something";//will throw an error saying assignment to constant variable
}

newName();
*/

//Hoisting concepts 

function newName(){
    name="Niki";
    var name2="Something";
}
newName();
console.log(name);//gives an output as Niki since it considers name as a global variable
//console.log(name2);//gives an error "name2 not defined"

//so what is happening here when the code is executed all the variables are declared initially and later assinged a value
//since not any keyword is used with name the variable name is being treated as global variable

//when name2 is accessed it gives an error that the name is not defined since the name2 variable was declared within the function
//it should go through in Es6 if we redeclare it

function newName(){
    name="Niki";
    var name2="Something";
}
newName();
name2="Something";
console.log(name);//gives an output as Niki since it considers name as a global variable
console.log(name2);

//gives an error "name2 not defined"









