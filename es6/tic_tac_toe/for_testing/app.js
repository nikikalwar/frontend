let gridItem=document.querySelectorAll(".grid-item");
console.log(gridItem);
let count=0;
for(let i=0;i<9;i++){
    if(i<9){
    gridItem[i].addEventListener("click",markXY);

    console.log(gridItem[i])
    }
   // else document.addEventListener("click",gameOver);
}
let str=[];
function markXY(e){
    count++;
   // console.log(e.target.id[e.target.id.length-1]);

    e.stopPropagation();
    const target=document.querySelector("#"+e.target.id);
   // console.log(target);
    const h1=document.createElement("h1");
    h1.classList="h1-class";
  //  console.log(h1);
   
    if(count%2==0)
    {  str[e.target.id[e.target.id.length-1]]="O";
    h1.textContent="O";
    h1.style.color="black";
}
    else {
        str[e.target.id[e.target.id.length-1]]="X";
        h1.innerHTML="X";
        h1.style.color="red";
    }
   
   // str+=h1.innerHTML;
   target.appendChild(h1);
   if(count>=3)
            winner();    
 
}

//logic to check if someone one
let win_1=document.querySelector("#dis-win");
function winner(){
    console.log(count);
    const h1_text=document.querySelectorAll(".h1-class"); 
 //  console.log(h1_text);
 
   // }
    //check condition for winner
    //x-012,345
 //1st part for all rows

    for(let i=1;i<=count;i=i+3){
         // str1=str[i];    
        // console.log(i);
      if(str[i]===str[i+1]&&str[i]===str[i+2] &&typeof str[i]!=='undefined'){
            setTimeout( alert(win_1.textContent=`Player ${str[i]} has won`),1000);
            //  console.log("this part is having issue");
                gameOver();
             }
         }

         //2nd part for all columns
         
        for(let i=1;i<=3;i++){
            if(str[i]===str[i+3]&&str[i]===str[i+6] && typeof str[i]==="string"){
                setTimeout( alert(win_1.textContent=`Player ${str[i]} has won`),1000);

             //  console.log("this part is having issue");
               gameOver();
            }
        }

        //3rd part for all diagonal elements
        if(str[1]===str[5] && str[5]===str[9] && typeof str[1]==="string")
        {
           setTimeout( alert(  win_1.textContent=`Player ${str[1]} has won`),1000);
           gameOver();
        }
         if(str[3]===str[5] && str[5]===str[7] && typeof str[3]==="string" )
        {
         setTimeout(  alert(win_1.textContent=`Player ${str[3]} has won`),1000);
           gameOver();
        } 
        
        else if(win_1.textContent==="Game is on" && count>=9){
          setTimeout(alert(  win_1.textContent="Nobody won ,let's try again"));
            gameOver();
        }
       

}

function gameOver(){
    setTimeout(function(){  location.reload();}, 2000);
    console.log("Game over");
   
}






