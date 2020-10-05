function timeAdder(value1,label1,value2,label2){
   // console.log(typeof(value1));
    let label3;
    let value3=0;
if(typeof(value1)!=='number'||typeof(value2)!=='number'){
   return "false";//will return false for any values other than a number
}

 if(label1[label1.length-1]!=='s' && value1>1)
  return "false";// return "false for invalid labe1";

 if(label2[label2.length-1]!=='s' && value2>1)
 return "false"; //return "false for invalid label2";

 if(label2[label2.length-1]!=='s') label2+="s";
 //console.log(label2);//why?--either we need to write regEx for the conditions or || will make the code look
 //messy//no issues since we already checked for invalid inputs so cool

 if(label1[label1.length-1]!=='s') label1+="s";
   // console.log(label1);

 if(label1===label2) //if they are similar types 
{
     value3=value1+value2;
     label3=label1;
    // console.log(value3,label3);
  }  
  
  
   else { 

       if(label1==="seconds"){
           label3="seconds";
           switch(label2){
               case "minutes":
                   value3=value2*60+value1;
                   break;

                   case "hours":
                       value3=value2*60*60+value1;
                       break;

                       case "days":
                           value3=value2*60*60*24+value1;
                           break;
           }
       }//seconds if statement for label1==="seconds"
    
       if(label1==="minutes"){
        switch(label2){
            case "seconds":
                value3=value1*60+value2;
                label3="seconds";
                break;

                case "hours":
                    value3=value2*60+value1;
                    label3="minutes";
                    break;

                    case "days":
                        value3=value2*60*60*24+value1;
                        label3="hours";
                        break;
        }
    }//seconds if statement for label1==="minutes"

    if(label1==="hours"){
        switch(label2){
            case "seconds":
                value3=value1*60*60+value2;
                label3="seconds";
                break;

                case "minutes":
                    value3=value2*60+value1;
                    label3="minutes";
                    break;

                    case "days":
                        value3=value2*24+value1;
                        label3="hours";
                        break;
        }
    }//seconds if statement for label1==="hours"

    if(label1==="days"){
        switch(label2){
            case "hours":
                value3=value1*24+value2;
                label3="hours";
                break;

                case "minutes":
                    value3=value2*60*24+value1;
                    label3="minutes";
                    break;

                    case "seconds":
                        value3=value2*60*60*24+value1;
                        label3="seconds";
                        break;
        }
    }// if statement for label1==="hours"

   }
   let arr1=[value3,label3]; /* too much logic so keeping it simple*/
   return arr1;

}
/* my test cases*/
console.log(timeAdder(5,"seconds",5,"seconds"));
console.log(timeAdder(50,"days",10,"seconds"));
console.log(timeAdder(5,"minutes",19,"hours"));
console.log(timeAdder(5,"minutes",10,"hours"));


let output;

console.log(output=timeAdder(2,"minute",3,"minutes"));

console.log(output=timeAdder(5,"days",25,"hours"));
console.log(timeAdder(false,false,5,"minutes"));
console.log(timeAdder({},"days",5,"minutes") );

/*
future thoughts might give it a try implementing with classes but this is better since with objects
we will be introducing variations during production time and setting different level of data abstraction will 
need to be considered like the data types of the class should/should not be available /will come back later to the code
after a week after revising my classes concepts a little bit




Details:
 
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers  

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")


Requirements:

1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs 

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"]; 

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

*/






