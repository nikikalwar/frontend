const myForm=document.getElementById("myForm");

console.log(myForm);

const button=document.querySelector('button');

button.addEventListener("click",addList);


function addList(e){
console.log(e);
const taskItem=document.getElementById("myForm").elements[0].value;
const taskTime=document.getElementById("myForm").elements[1].value;
const taskPriority=document.getElementById("myForm").elements[2].value;
const details=document.getElementById("myForm").elements[3].value;

console.log(taskItem);
console.log(taskTime);
//save it to local storage to display later

saveList(taskItem,taskTime,taskPriority,details);

}
let a= localStorage.mySession;

function saveList(taskItem,taskTime,taskPriority,details){
    const listDetails={
        taskName:taskItem,
        tasktime:taskTime,
        Priority:taskPriority,
        details:details
    }
       
    let listVar=(JSON.parse(localStorage.getItem(localStorage.mySession).replace(",}","}")));
    for(prop in listVar){
        if(prop==="listCount"){
         // ++listVar[prop];
      console.log(listVar[prop]=listVar[prop]+1);
      c=listVar[prop];
        }
    }
    console.log(listVar);
        
    
    console.log(c);

   for(prop in listDetails){
   listDetails[prop+c]=listDetails[prop];
  delete listDetails[prop];
   }
     console.log(listDetails);
  for(keys in listDetails)
    console.log(keys);

      
    console.log(JSON.stringify(listDetails));
  //  var a= localStorage.mySession;
   

  // console.log(a);
 console.log( localStorage.getItem(a))
 let b=JSON.stringify(listVar)+JSON.stringify(listDetails);
 b=b.replace('}{',',');
 b=b.replace(",}","}");
 console.log(b);
 localStorage.removeItem((localStorage.mySession))

           // b=(JSON.parse(b));
          //  console.log(b);
            localStorage.setItem(localStorage.mySession,b);
           // localStorage.getItem(b);
            

//localStorage.setItem("list"+Math.floor(Math.random()*25),JSON.stringify(listDetails))
 //b=b+(JSON.stringify(listDetails));
 //console.log(b);
   // localStorage.setItem(a,JSON.stringify(listDetails));
   /* JSON.parse(localStorage.getItem(a)).push(taskTime);
    JSON.parse(localStorage.getItem(a)).push(taskPriority);
    JSON.parse(localStorage.getItem(a)).push(details);
    */

}