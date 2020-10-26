
const button=document.querySelector("button");
button.addEventListener("click",editDetails);

function editDetails(e){
            const first_name=document.getElementById("myForm").elements[0].value;
        const lastname=document.getElementById("myForm").elements[1].value
        const email=document.getElementById("myForm").elements[2].value
        const password=document.getElementById("myForm").elements[3].value

        console.log(password);
           c= localStorage.mySession;
          d= localStorage.getItem(c);
console.log(d);
d=JSON.parse(d);
for(prop in d){
    
   switch(prop){
       case "name":
           if(first_name.length>=4)
           d[prop]=first_name;
           break;

           case "nameLast":
               if(lastname.length>=4){
               d[prop]=last_name;
               alert("lastname changed");
               }
               break;

               case "email":
                   if(d[prop]!=email && (email.split('@')).length==2)
                 {  d[prop]=email;
                   alert("email changed");}
                   break;

                   case "pass":
                       if(d[prop]!=password &&password.length>6 )
                       {d[prop]=password;
                       alert("password changed");}
                      // break outerLoop; 
                       break;
             
   }
}
console.log(d);
d=JSON.stringify(d);
localStorage.setItem(localStorage.mySession,d)
    }