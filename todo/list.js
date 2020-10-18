const date_p=document.querySelector("#date-p");

setInterval( function(){
    
date_p.innerHTML=window.Date().slice(0,window.Date().indexOf('G'));
console.log(date_p.innerHTML);

}
    ,10000)

    console.log(date_p);


    const add_task=document.querySelector("#add-task");

    add_task.addEventListener("click",addList);

   function addList(e){
    window.location.href="newlist.html";

    }

    console.log()


    


