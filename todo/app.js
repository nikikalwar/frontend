const login=document.querySelector(".button-login");

const signup=document.querySelector(".button-signup");

login.addEventListener("click",goToPageLogin);

signup.addEventListener("click",goToPageSignup);

function goToPageLogin(e){
   // console.log(e.target.classList);
   window.location.href="http://www.w3schools.com";
    
}


function goToPageSignup(e){
    //console.log(e);
    window.location.href="signup.html";

}



