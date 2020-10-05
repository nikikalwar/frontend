/* Switch assignments */

/* details */

/*requirements to be add should convert time */


function timeAdder(value1,label1,value2,label2){
            let label3;
            let value3=0;
    if(typeof(value1)&&typeof(value2)!=='number'){
            console.log("not a number");
    }
   
        else if(label1===label2) 
        {
             value3=value1+value2;
             label3=label1;
             console.log(value3,label3);
          }  
          
           else { 
               switch(label1){
                case "seconds":
                    switch(label2){
                        case "minutes":
                            value3=value2*60+value1;
                            label3=label1;
                            break;

                            case "hours":
                                value3=value2*60*60+value1;
                                label3=label1;
                                break;

                                case "days":
                                    value3=value2*60*60*24+value1;
                                    break;
                                
                    }

                    case "minutes":
                        switch(label2){
                                case "hours":
                                    value3=value2*60+value1;
                                    label3=label1;
                                    break;
    
                                    case "days":
                                        value3=value2*60*24+value1;
                                        label3=label1;
                                        break;

                                        case "seconds":
                                            value3=value+value1;
                                            label3=label1;
                                            break;

                        }
                        break;

                        case "hours":
                            switch(label2){
                                    case "days":
                                        value3=value2*60*24+value1;
                                        label3=label1;
                                        break;


                    console.log(value3,label3);

                    /*
                    console.log("case1 executed");
                    if(label2==="days"){
                        label3="hours";
                    value3=value2*24;
                    }
                    */
                    break;

                    case "seconds":
                        console.log("case2 executed");
                        if(label2==="minutes"){
                            label3="seconds";
                        value3=value2*60;
                        }
                        break;

                        case "minutes"||"minute":
                            console.log("case3 executed");
                            if(label2==="hours"){
                                label3=="minutes";
                                value3=value2*60;
                            }
                            break;

                        }

                      //  console.log(value3,label3);
                        
                    }
                    
                }
            

            }
timeAdder(5,"minutes",8,"minutes")
timeAdder(5,"hours",6,"hours");
timeAdder(5,"seconds",5,"minutes");