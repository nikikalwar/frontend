

  ///taskName=document.querySelector(`.grid-container`);
 //id_view has the id of the list 

 let c=localStorage.getItem(localStorage.mySession);

 //console.log(c);
 const d=localStorage.id_view;
//console.log(d);
c=JSON.parse(c);
//console.log(c);
 for(prop in c){
     if(prop===d){
         
         //console.log(gh=c[prop]);
         a=document.querySelector(`.item1`);
         a.innerHTML=c[prop];
         //console.log(a);
         s=prop[prop.length-1];
            //console.log(s);
            //console.log(c[`tasktime`+s]);
            a=document.querySelector(`.item2`);
         a.innerHTML=c[`tasktime`+s];

         a=document.querySelector(`.item3`);
         a.innerHTML=c[`Priority`+s];

                
            //console.log(c[`Priority`+s]);

            a=document.querySelector(`.item5`);
            a.innerHTML=c[`details`+s];
            //console.log(c[`details`+s]);
              
            let item_4=document.querySelector(`.item4`);
                item_4.addEventListener(`click`,rename_list);
                function rename_list(){
                    cd=prompt(`rename the list`);
                    if(cd.length>1)
                    c[d]=cd;
                    document.querySelector('.item1').innerHTML=c[d];
            }
            }
        }
    // else //console.log(`something`)

  
    j=document.querySelector(`.go_back`);
//console.log(j);
j.addEventListener(`click`,myscript)
function myscript(){
   // window.localStorage.removeItem('id_view');
    window.location.href=`list.html`};
               
    
  