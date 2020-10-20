const button=document.querySelector('button');

console.log(button);

button.addEventListener("click",getFormData)
 let flag=0;
 function getFormData(e){

     console.log(e);
     const firstName=document.getElementById("myForm").elements[0].value;
     const lastName=document.getElementById("myForm").elements[1].value;
     const email=document.getElementById("myForm").elements[2].value;
     const password=document.getElementById("myForm").elements[3].value;
     console.log(password)
     console.log(firstName);
         validateForm();
function validateForm(){
    let passRegex=/[a-zA-Z0-9$]/ig;
    if(firstName.length==0||lastName.length==0){
        alert("Invalid username/lastname");
      
    }
    else if(email.split('@')<2 && email.split('.com')<2){
        alert("Invalid email address");
      
    }
    else if((password.match(passRegex)).length<8)
        {
            alert("invalid password");
            
        }
        else  flag=1;
}
//
//call function to store the array in a list
let person = {
    name: firstName,
    nameLast: lastName,
    email:email,
    pass:password,
    listCount:0,
};
if(flag==1){
let user=localStorage.setItem("user"+""+firstName+Math.floor(Math.random()*999), JSON.stringify(person));
console.log(user);

    window.location.href="login.html";
 }
}

 