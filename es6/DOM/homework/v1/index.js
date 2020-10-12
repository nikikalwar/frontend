//const myCanvas=document.querySelectorAll("myCanvas");

//const { setTimeout } = require("timers");

//console.log(myCanvas);
let divId=document.querySelector("#rectangleWrapper");
let canvasDiv=document.querySelector("#myCanvas");

    for(let i=1;i<=10;i++){
        var newEl=document.createElement("canvas");
        newEl.width  = 200;   
        newEl.height = 100;
       // let j=100;
        newEl.id="myCanvas"+i;
        newEl.style.border   = "2px solid";
       var random=Math.floor(Math.random()*16777215).toString(16);
      // console.log(random);
        newEl.style.backgroundColor="#"+random;
       // j=j+100;
        //divId.appendNode(newEl);
          divId.appendChild(newEl);
          let h3=document.createElement("h3");
          h3.innerHTML="#"+random;
         // console.log(h1)
          divId.appendChild(h3)
        //  console.log(newEl);
          //console.log(canvasDiv)
          console.log(newEl);
      }






//console.log(divId);


window.onload =()=>{
  let canvasId=document.querySelectorAll("canvas");
 for(let i=0;i<10;i++){
   console.log(canvasId[i].id);
 }

}
