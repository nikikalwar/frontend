
//For..in loop
/*

loop through an objects's properties in arbitrary order 
*/
/*
const users={1:"Sally",2:"Billy",3:"Ashley",4:"Timmy"};

for(let prop in users){
    console.log(prop);
    if(users[prop]==="Sally"){
        users[prop]="unknown";
        console.log(users[prop]);
    }
}
*/
/*
const drinks=["coffee","sprite","tea","coke","pepsi"];

drinks.forEach((d) =>{
    console.log(d);
})
*/
//forEach does not supports break statements



//set example

let originalArray=["chris","chris","Jane","Sally","Billy","Billy"];
let uniqueNameSet=new Set(originalArray);

for(let n of uniqueNameSet) {
    console.log(n);
}