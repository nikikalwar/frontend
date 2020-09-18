//nested else and else if

const bankBalance=1;
const cost=123;
const hasCredit=true;
const hasReachedLimit=false;

if(bankBalance>cost){
    console.log("You can pay with your bank balance");
}

else if(hasCredit===true && !hasReachedLimit){
    console.log("you can buy with credit card");
}
else console.log("Sorry, but you have insufficient balance ")