const button=document.querySelector('button');

console.log(button);

button.addEventListener("click",getFormData)

 function getFormData(e){
     console.log(e);
     const firstName=document.getElementById("myForm").elements[0].value;
     const lastName=document.getElementById("myForm").elements[1].value;
     const email=document.getElementById("myForm").elements[2].value;
     const password=document.getElementById("myForm").elements[3].value;
     console.log(password)
     console.log(firstName);
 }


 