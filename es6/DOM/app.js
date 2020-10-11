//Document object model

let allSpans=document.getElementsByTagName("span");

for(let span of allSpans){
console.log(span);
span.innerText="Changing the span text";
}
//getElementsByTagName selects all the instances of the tag
//lets see if it can select only specific paragraphs

let allSpara=document.getElementsByTagName("p");

for(let par of allSpara){
console.log(par);
par.innerText="Changing the paragraph text";
}

