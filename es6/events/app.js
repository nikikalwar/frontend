//Events

/*
any event that takes place in the DOM 
can be user-generated or by an API



*/
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