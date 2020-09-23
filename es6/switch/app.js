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
/*
//so the point here is if different cases are present or stacked together , if any of the cases are true the next statement will be executed
const myFruit="banana";
switch(myFruit){
    case "apple":
        case "banana":
            case "orange":
        console.log("Great! I love banana.");
        break;
    case "oranges":
        console.log("Oranges are great");
        break;

        default:
            console.log("anything is fine");
}
*/
/*
function numChecker(num){
    switch(num){
        case 0:
            case 1:
                case 2:
                    case 3:
                        console.log("Low range number");
                        break;

        case 4:
            case 5:
                case 6:
                    console.log("Mid range ");
                    break;

        case 7:
            case 8:
                case 9:
                    case 10:
                        console.log("High range");
                        break;

        default:
            console.log("out of range");
            break;
    }

}

numChecker(1);
numChecker(5);
numChecker(9);
numChecker("2");

/*output
Low range number
Mid range 
High range
out of range
*/

//another example
//last example on switch statements
const donutPicker=(flav)=>{
    switch(flav){
        case 's':
            return "sprinkles";
            case 'c':
                return "chocolate glazed";
                case 'b':
                    return "bear claw";
                    default:
                        return ;
    }
}

const donuts=(selection)=>{
    const selectedDonut=donutPicker(selection);
    if(!selectedDonut){
        console.log("not a proper selection");
    }
    else console.log("You have selected "+selectedDonut);
}

donuts('s');
donuts('aa');
donuts('b');

