const button=document.querySelector('button');

console.log(button);

button.addEventListener("click",getFormData)

 function getFormData(e){
     console.log(e);
     
  const userName=document.getElementById("myForm").elements[0].value;
   const  password=document.getElementById("myForm").elements[1].value;
     console.log(userName)
     console.log(typeof(password));
     checkUser(userName,password);
  
 }

 function checkUser(userName,password){
     var loginuser="";
    loginUser=userName;
    if (JSON.parse(localStorage.getItem(loginUser))!=null){
        var a=JSON.parse(localStorage.getItem(loginUser))
        if(password=a.pass)
        //&& password==JSON.parse(localStorage.getItem(userName)).pass){
         console.log("succesful login");
         localStorage.setItem("mySession",a.name);
         window.location.href="list.html"
    }
    else console.log("unsuccessful login")
    
 
 }
