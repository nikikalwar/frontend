//for Loops

//for(inital expression;condition;increment expression)
/*
var index=0;
for(index;index<10;index++){
    console.log(index);
}
*/
/*
for(let i=1;i<=100;i+=1){
    if(i%3===0 && i%5===0) console.log("FizzBuzz");
    else if(i%3===0){
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
     
    else {
        console.log(i);
    }
}

*/
/* eg of continue
let x=0;
while(x<10){
    x+=1;
    if(x===5){
        console.log("I am skipped");
        continue;
    }
    console.log(x);
}

*/
/* demonstration of loops
*/
/*
outerLoop:
for(let i=0;i<10;i++){
    console.log("loop# "+i);
    innerLoop:
    for(let a=0;a<10;a++){
        console.log("looping inner "+a);
      //  if(a==3) break outerLoop;
      if(a===3) break innerLoop;
    }
    if(i===5) break outerLoop;
}
*/


