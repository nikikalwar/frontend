const myForm=document.querySelector("#myForm");
const input=document.querySelector("#myInput");
const btn=document.querySelector("button");
const ul=document.querySelector(".list-group");
console.log(ul);

myForm.addEventListener("submit",submitEvent);

function submitEvent(e){
    e.preventDefault();
    let myInput=document.getElementById("myInput").value;
    let newList=document.createElement("li");
    newList.classList.value="list-group-item";
    newList.innerText=myInput;
    ul.appendChild(newList);
    
}

