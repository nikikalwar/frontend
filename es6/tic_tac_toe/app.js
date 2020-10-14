let gridItem=document.querySelectorAll(".grid-item");
console.log(gridItem);
let count=0;
for(let i=0;i<9;i++){
    gridItem[i].addEventListener("click",markXY);
    console.log(gridItem[i])
}

function markXY(e){
    count++;
    
    console.log(e.target.id);
    e.stopPropagation();
    const target=document.querySelector("#"+e.target.id);
    console.log(target);
    const h1=document.createElement("h1");
    if(count%2==0)
    h1.innerHTML="Y";
    else 
    h1.innerHTML="X";
   target.appendChild(h1);


    
}

