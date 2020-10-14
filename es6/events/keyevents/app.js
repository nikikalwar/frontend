//similar to previous
//checking keyup,keydown events

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

const div3=document.querySelector("#div3");

const textArea=document.querySelector("textarea");
textArea.addEventListener("keyup",delText);

function delText(e){
    e.stopPropagation();
    e.stopDefault();
    
}



