//Events

/*
any event that takes place in the DOM 
can be user-generated or by an API



*/

/*
const greenBackground=document.querySelector("#list-items");

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

*/

const li=document.querySelector("#list-items");
const div2=document.querySelector("#div2");

const myForm=document.querySelector("#myForm");

myForm.addEventListener("submit",submitEvent);

function submitEvent(e){
  e.preventDefault();
 let myInput=document.getElementById("myInput").value;
 console.log(myInput);
 let LI=document.createElement("li");
 LI.innerText=myInput;
 li.appendChild(LI);
 console.log(LI);
}




