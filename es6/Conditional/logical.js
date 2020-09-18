//logical operators


const bankAccountBalance=1234;
const cost=123;
const canSpend=true;
const hasCreditCard=true;
const hasReachedLimit=false;

if(hasReachedLimit!==true){
    console.log("you can still make the purchase");//prints
}

if(!hasReachedLimit){
    console.log("you can make the purchase");//prints
}

let myName;
console.log(myName); //prints undefined

console.log(!myName);//prints true



/*
if(bankAccountBalance>=cost && cost<150)
{
    if(canSpend===true)
    console.log("you can spend money");
}
//using nested if statements //can be done in single line

*/