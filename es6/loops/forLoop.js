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

/* this will give the i value as 10 since we have declared global scope using var
so the value is being incremented to 10 
for(var i=0;i<10;i+=1){
setTimeout(()=>{
    console.log("I am being printed"+i)
},1000)
}

*/

//use let

/*
for(let i=0;i<10;i+=1){
    setTimeout(()=>{
        console.log("I am being printed"+i)
    },1000)
    }
    

    //o/p
    I am being printed0
I am being printed1
I am being printed2
I am being printed3
I am being printed4
I am being printed5
I am being printed6
I am being printed7
I am being printed8
I am being printed9

*/
/* using var but using closures */
/*
function looper(value){
    setTimeout(()=>{
        console.log(value);
    },3000)
}

for(var i=0;i<10;i++){
    looper(i);
}

//issue resolved without using let
*/


