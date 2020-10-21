const date_p=document.querySelector("#date-p");

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

   

    
}

todo();





    


