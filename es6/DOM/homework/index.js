//const myCanvas=document.querySelectorAll("myCanvas");

//const { setTimeout } = require("timers");

//console.log(myCanvas);
let divId=document.querySelector("#canvas-div");
let canvasDiv=document.querySelector("#myCanvas");
setInterval(()=>{
    for(let i=1;i<=10;i++){
        var newEl=document.createElement("canvas");
        newEl.width  = 200;
        newEl.height = 100;
       // let j=100;
        newEl.id="myCanvas"+i;
       // newEl.style.border   = "1px solid";
        newEl.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
       // j=j+100;
        //divId.appendNode(newEl);
          divId.appendChild(newEl);
        //  console.log(newEl);
          //console.log(canvasDiv)
          console.log(newEl);
      }
},1000);





console.log(divId)