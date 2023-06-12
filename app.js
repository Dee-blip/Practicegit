import React from "react";
import ReactDOM from "react-dom/client";

/**
 *  <div id="parent">
 *      <div id="child"?
 *          <h1> I am h1 tag</h1>
 *      </div>
 *      <div id="child"?
 *          <h1> I am h1 tag</h1>
 *      </div>
 *  </div>
 * 
 * ReactElement(Object) ==> HTML(Browser Understands)
 * 
 */
const parent= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am an H1 tag"),React.createElement("h2",{},"I am an Ninja tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am an H1 tag"),React.createElement("h2",{},"I am an H1 tag")])]);





// const heading = React.createElement(
//     "h1",{id:"heading"},
//     "Hello World By ReactJs"el
//     );
// console.log(heading); //object

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// convert object into heading tag and put into the DOM and also put parent inside the root tag in html file