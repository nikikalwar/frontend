/*

const myArticle=<article>THis is a article</article>


const blog = (

<div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
  </article>
</div>
);
   */

   /*

   ///basic hello world rendering

   import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

*/

/*ReactDOM.render()

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>,document.getElementById('app'))

*/

/*2nd

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
<span id="container"></span>
	<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
*/

/*

//Passing a Variable to ReactDOM.render()

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList=(
  <ul>
      <li>JSX elements are the unit of JSX expression</li>
      <li>Just combined html and JS</li>
       <li>It's easy to understand if you are good with JS</li>
        <li>Let's see the next concepts</li>
         <li>That's all</li>
  </ul>
);

ReactDOM.render(myList,document.getElementById('app'));

*/

/*

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv=(<div className="big">I AM A BIG DIV</div>)
ReactDOM.render(myDiv,document.getElementById('app'));


*/

/*

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

*/

/* 20 Digits of Pi in JSX

app.js

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math=<h1>2 + 3 = 2 + 3</h1>


import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math=<h1>2 + 3 = {2 + 3}</h1>}


ReactDOM.render(math,document.getElementById('app'));

*/

/* variable attributes in JSX 

import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg=<img src={goose} />;

ReactDOM.render(gooseImg,document.getElementById('app'));


*/

/*event listeners

Event Listeners in JSX

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}
    />
);

ReactDOM.render(kitty, document.getElementById('app'));

*/

/* using if else in JSX

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;



// if/else statement begins here:
if (coinToss() === "heads"){
img=  <img src={pics.kitty} />
}

else{
 img= <img src={pics.doggy} />
}

ReactDOM.render(img.document.getElementById('app'));

*/
/* ternary operators in JSX

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss()==="heads"?"kitty":"doggy"]} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

*/

/* &&operator in JSX

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
    {!judgmental&&<li>Nacho Cheez Straight Out The Jar</li>
      }  <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(

	favoriteFoods, 
	document.getElementById('app')
);

*/

/*.map function

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);

// ReactDOM.render goes here:

ReactDOM.render(<ul>{peopleLis}</ul>,
  document.getElementById('app')
);
*/

/*Keys in JSX

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];


const peopleLis = people.map((person,i) =>
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
);

// ReactDOM.render goes here:

ReactDOM.render(<ul>{peopleLis}</ul>,
  document.getElementById('app')
);

*/

/*
React create element

const greatestDivEver = React.createElement(
  "div",
null,
"i am div"
);

*/





/*


import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
  render(){
    if(fiftyFifty)
    return <h1>Tonight I'm going out WOOO</h1>;
    else 
    return <h1>Tonight I'm going to bed WOOO</h1>;
  }
  
}

ReactDOM.render(<TonightsPlan />,document.getElementById('app'));

*/

/* use this 

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'Niki';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

*/

/* event listener

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />,document.getElementById('app'));

*/
/*

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  // Add your methods in here.
  constructor(props){
    super(props);
    this.state={date:new Date()}
  }
  render(){
    return(
      <div>
      {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

*/