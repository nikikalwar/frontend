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
let c=(JSON.parse(localStorage.getItem(a))).listCount;
c=c+1;
function saveList(taskItem,taskTime,taskPriority,details){
    const listDetails={
        taskName:taskItem,
        tasktime:taskTime,
        Priority:taskPriority,
        details:details
    }
    for(i in listDetails){
    i.concat(""+c);
    }
  /*other 
      console.log(listDetails)
    console.log(JSON.stringify(listDetails));
    var a= localStorage.mySession;
    console.log(a.listCount);

  // console.log(a);
 console.log( localStorage.getItem(a))
 b=localStorage.getItem(a)+JSON.stringify(listDetails);
 b=b.replace('}{',',');
 console.log(b);
b=(JSON.parse(b));
console.log(b);

*/
//localStorage.setItem("list"+Math.floor(Math.random()*25),JSON.stringify(listDetails))
 //b=b+(JSON.stringify(listDetails));
 //console.log(b);
   // localStorage.setItem(a,JSON.stringify(listDetails));
   /* JSON.parse(localStorage.getItem(a)).push(taskTime);
    JSON.parse(localStorage.getItem(a)).push(taskPriority);
    JSON.parse(localStorage.getItem(a)).push(details);
    */

}