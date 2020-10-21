const date_p=document.querySelector("#date-p");
document.querySelector(".user-id").innerHTML=localStorage.getItem('mySession');

const log_out=document.querySelector("#log-out");
console.log(log_out);
log_out.addEventListener("click",loggingOut);

//event listener to go the list 
const selected_list=document.querySelectorAll("#List-items");

/*
selected_list.forEach(i=>{
 i.addEventListener("click",ListView);

})
*/
//selected_list[i].addEventListener("click",ListView);

//stores the data for displaying the data on the next page

function ListView(e){

    console.log(e.target);

}
function loggingOut(e){
 // location.reload();
e.stopPropagation();
 window.location.href="login.html";
}

setInterval( function(){
    
date_p.innerHTML=window.Date().slice(0,window.Date().indexOf('G'));
console.log(date_p.innerHTML);

}
    ,10000000)

    console.log(date_p);


    const add_task=document.querySelector("#add-task");

    add_task.addEventListener("click",addList);

   function addList(e){
    window.location.href="newlist.html";

    }

    console.log(localStorage.getItem("mySession"));

//writing the lists dynamically

//rendering one list 

//function to generate the list

function todo(){
   // let user=localStorage.mySession;
    let data=localStorage.getItem(localStorage.mySession);
   // console.log(data);

   let g=data.slice(data.indexOf("listCount"),data.length)
   // data=JSON.parse(data);
   // console.log(data);

   console.log(g);

   e=localStorage.getItem(localStorage.mySession);
   console.log(e);

  i=1;
e=JSON.parse(e); 

for(let prop in e){
  testprop="tasktime";
  testTask="taskName";
  testTask=testTask+i;
testprop=testprop+i; 
//console.log(testprop);
//this one checks for the name of the task
if(testprop===prop){
    
  new_task= document.createElement("div"); 
  new_task.classList="row";
  new_task.style="background-color: rgb(212, 212, 212) ;border:2px solid black;margin:2px;padding:2px"
 // addEventListener("click",ListView);
      new_column=document.createElement("div");
      new_column.classList="column";
      new_h2=document.createElement("h2");
      new_h2.innerHTML=(new Date()).toString().slice(4,25);//e[prop]-- for later
      new_column.append(new_h2);
      new_task.append(new_column);
      document.body.append(new_task);

                    //for the taskname
              new_column=document.createElement("div");
              new_column.classList="column";
              new_h2=document.createElement("h2");
            
                new_h2.innerHTML=e["taskName"+i];
              new_column.append(new_h2);
              new_task.append(new_column);
                document.body.append(new_task);
      //for the checkbox

      
            new_column=document.createElement("div");
              new_column.classList="column";
              new_column.style="text-align: right";
              new_h2=document.createElement("input");
            new_h2.key="taskName"+"Input"+"";
              new_h2.type="checkbox";
             new_h2.style="width:75%;height:75%;  margin:10px 10px 10px 10px;text-align: right; "> 
   
              new_column.append(new_h2);
              new_task.append(new_column);
              addEventListener("click",ListView);
              document.body.append(new_task);

      
    console.log(e["taskName"+i])
console.log(prop);
console.log(e[prop]);
i++;
}
}/*
i=1;
for(let prop in e){
  testprop="taskName";
testprop=testprop+i; 
//console.log(testprop);
//this one checks for the name of the task
if(testprop===prop){
    
     
      new_column=document.createElement("div");
      new_column.classList="column";
      new_h2=document.createElement("div");
      new_h2.innerHTML=e[prop];
      new_column.append(new_h2);
      new_task.append(new_column);
      document.body.append(new_task);
      
    
console.log(prop);
console.log(e[prop]);
i++;
}
} 
/*
for(let prop in e){
  testprop="tasktime";
testprop=testprop+i; 
//console.log(testprop);
//this one checks for the name of the task
if(testprop===prop){
    
      new_task= document.createElement("div"); 
      new_task.classList="row";
      new_task.style="background-color: rgb(212, 212, 212) ;border:2px solid black;"
      new_column=document.createElement("div");
      new_column.classList="column";
      new_h2=document.createElement("div");
      new_h2.innerHTML=e[prop];
      new_column.append(new_h2);
      new_task.append(new_column);
      document.body.append(new_task);
      
    
console.log(prop);
console.log(e[prop]);
i++;
}
}
*/


    
}

todo();





    


