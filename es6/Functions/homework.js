const mortal="men";
//const socrates="man";



function myCheck(name){
    if(name==="Socrates" && mortal==="men"){
        return true;
    }
    else return false;
}
//console.log(myCheck("Socrates"));//outputs true
//myCheck(1);
//console.log(myCheck("Ssafaf"));//outputs false

console.log(myCheck(10));//outputs false
