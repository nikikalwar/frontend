//Events

/*
any event that takes place in the DOM 
can be user-generated or by an API



*/
const greenBackground=document.querySelector("#list-items");
const clickableButton=document.querySelector("button");
const clickDiv=document.querySelector("#clicky");
/*
clickDiv.addEventListener("click",function(){
    alert("clicked");
    console.log(event)
})

button.addEventListener("focus",function(event){
        console.log("button was clicked");
});
*/

clickableButton.addEventListener("click",logEvent);
//clickableButton.addEventListener("focus",logEvent)

function logEvent(e){
    if(e.type==="click"){
        clickableButton.innerHTML="I am clicked";
        console.log(e);
        clickableButton.removeEventListener("click",logEvent);
    }
    //removing the eventListener so that the button is unclick
    //able after a single click
}



    const background=document.querySelector("#background");

  background.addEventListener("click",switchBackground);  
function switchBackground(e) {
    e.stopPropagation();
    if(e.type==="click"){
      
        background.classList.add("background-color");
        console.log(background);

    }
    background.removeEventListener("click",switchBackground)
}
greenBackground.addEventListener("click",green);  
function green(e) {
  e.stopPropagation();
    if(e.type==="click"){
        e.target.classList.add("green-background");
        //console.log(greenBackground);
        console.log(e.target);
       
    }
   // greenBackground.removeEventListener("click",green);
//stop propagation to other sections and the scope is limited to that particular section

}


