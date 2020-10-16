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

