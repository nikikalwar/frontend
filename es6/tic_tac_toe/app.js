let gridItem=document.querySelectorAll(".grid-item");
console.log(gridItem);
let count=0;
for(let i=0;i<9;i++){
    gridItem[i].addEventListener("click",markXY);
    console.log(gridItem[i])
}
let str=[];
function markXY(e){
    count++;
    if(count>9){
        
      //  console.log(str);
      gameOver();
    }
    console.log(e.target.id);
    e.stopPropagation();
    const target=document.querySelector("#"+e.target.id);
    console.log(target);
    const h1=document.createElement("h1");
    h1.classList="h1-class";
    if(count%2==0)
    h1.innerHTML="O";
    else 
    h1.innerHTML="X";
   // str+=h1.innerHTML;
   target.appendChild(h1);
   if(count==9){
            winner();    
       
   }
 
}

//logic to check if someone one
let win_1=document.querySelector("#dis-win");
function winner(){
    const h1_text=document.querySelectorAll(".h1-class"); 
 //  console.log(h1_text);
    for(let i=0;i<9;i++){
        str[i]=h1_text[i].textContent;
            console.log(str[i]);
    }
    //check condition for winner
    //x-012,345
 //1st part for all rows
    for(let i=0;i<9;i=i+3){
         // str1=str[i];    
        // console.log(i);
      if(str[i]===str[i+1]&&str[i+1]===str[i+2]){
              win_1.textContent=`Player ${str[i]} has won`;
             }
         }

         //2nd part for all columns
        for(i=0;i<3;i++){
            if(str[i]==str[i+3]&&str[i+3]===str[i+6]){
               win_1.textContent=`Player ${str[i]} has won`
            }
        }

        //3rd part for all diagonal elements
        if(str[0]===str[4] && str[4]===str[8] )
        {
           win_1.textContent=`Player ${str[i]} has won`
        }
        else if(str[2]===str[4] && str[4]===str[6] )
        {
           win_1.textContent=`Player ${str[i]} has won`
        } 
        
        else if(win_1.textContent==="Game is on"){
            win_1.textContent="Nobody won ,let's try again"
        }

}

function gameOver(){
    alert("Game over");
    location.reload();
}






