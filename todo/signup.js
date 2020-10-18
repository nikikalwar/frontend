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
        
 
//
//call function to store the array in a list
let person = {
    name: firstName,
    nameLast: lastName,
    email:email,
    pass:password
};

localStorage.setItem(firstName+Math.floor(Math.random()*999), JSON.stringify(person));
console.log(person);

    // window.location.href="login.html";
 }

 