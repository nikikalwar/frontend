//Events

/*
any event that takes place in the DOM 
can be user-generated or by an API



*/
const button=document.querySelector("button");
const clickDiv=document.querySelector("#clicky");

clickDiv.addEventListener("click",function(){
    alert("clicked");
    console.log(event)
})

button.addEventListener("focus",function(event){
        console.log("button was clicked");
})