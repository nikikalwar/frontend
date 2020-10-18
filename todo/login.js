const button=document.querySelector('button');

console.log(button);

button.addEventListener("click",getFormData)

 function getFormData(e){
     console.log(e);
     const userName=document.getElementById("myForm").elements[0].value;
     const password=document.getElementById("myForm").elements[1].value;

     console.log(userName)
     console.log(Password);
  
 }

 
