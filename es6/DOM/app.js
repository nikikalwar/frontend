//Document object model
/*
let allSpans=document.getElementsByTagName("span");

for(let span of allSpans){
console.log(span);
span.innerText="Changing the span text";
}
//getElementsByTagName selects all the instances of the tag
//lets see if it can select only specific paragraphs
*/
//let allSpara=document.getElementsByTagName("p");
/*
for(let par of allSpara){
console.log(par);
this.innerText="Changing the paragraph text";
}
*/

const axios = require('axios');
let temp;
axios
	.get('https://www.youtube.com/')
	.then((response) => {
       temp=response.data;
       console.log(typeof temp)
       
console.log(temp.slice(0,4000));
    
      //  console.log(response.headers);
      // console.log(response.config);
	})
	.catch((error) => {
		console.error(error)
    });

//console.log(temp.slice(temp.search('html'),temp.search('/html')));
    
    
