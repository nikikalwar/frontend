//loops
//do something repeadetly.

/*
let numberOfLoops=0;
while(numberOfLoops<10){
    console.log("I am looping!");
    ++numberOfLoops;// or numberOfLoops++;
    console.log(numberOfLoops);
}

*/
/*
const name=["Chris","Bob","Joe"];

let index=0;
function nameLooper(arr){

while(index<name.length){
    if(name[index]==="Joe"){
        console.log(name[index]);
        break;
    }
    index++;
}
console.log(index);
}

nameLooper(name);
*/

//do..while statement

/*
do{
    statement
    while(condition)
}
*/
/*
let shouldRunOnlyOnce=false;
do{
    console.log("looping!");
    shouldRunOnlyOnce=false;
}while(shouldRunOnlyOnce);

*/


let condition;
do{
   const userInput=prompt("enter q to exit");
   if(userInput==='q'){
       condition=false;
   }
   else {
       condition=true;
   }
}while(condition);










