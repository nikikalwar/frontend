
//Assignment

function timeAdder(value1,label1,value2,label2){

        let minutes=0;
        let hours=0;
        let days=0;

        switch(label1){
                
                case "minutes":
                        minutes=minutes+value1;
                        break;
                case "hours":
                        hours=hours+value1;
                        break;
                case "days":
                        days=days+value1;
                        break;

        }
        switch(label2){
                case "minutes":
                        minutes=minutes+value2;
                        break;
                case "hours":
                        hours=hours+value2;
                        break;
                case "days":
                        days=days+value2;
                        break;

        }
        let arr1=[];
       if (minutes>0){
                arr1[0]=minutes;
                arr1[1]="minutes";
        }
        else if (hours>0){
                arr1[0]=hours;
                arr1[1]="hours";
        }

        else if (minutes>0){
                arr1[0]=days;
                arr1[1]="days";
        }
        console.log(arr1);
        

}

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")