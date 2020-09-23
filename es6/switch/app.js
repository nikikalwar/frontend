/* switch statement */

/*
switch(expression){
    case value1:
        statement to be executed when result of expression matches value1
        break;
        case value2:
            ....
            break;
            default:
                break;
}

*/
/*
//sample if else statements
const myFruit="apple";

if(myFruit==="apple"){
    console.log("Awesome! I love apples");
}
else if (myFruit==="orange"){
    console.log("Oranges are cool");
}

else console.log("anthing is fine");
*/

const myFruit="apple";

switch(myFruit){
    case "apple":
        console.log("Great! I love apples.");
        break;
    case "oranges":
        console.log("Oranges are great");
        break;

        default:
            console.log("anything is fine");
}