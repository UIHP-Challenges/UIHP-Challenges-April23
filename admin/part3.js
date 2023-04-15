/**

Part 3: the Virtual/Visual DOM
HTML has input and div, JS where we left off part 2
Create component - delete elements from html file, create in js instead
One component function will create elements, add event handlers, update js data, and update DOM
Add string interpolation by creating a new variable
Create convert function - takes in info for a DOM node, creates one, output JS object with link to new DOM node
Also create divInfo variable to hold info about new DOM node
Create new div that way
Create VDOM
Use new VDOM to create updateDOM function
 * 
 */
//Example of solution code (slide31 "creating a javascript 'virtual' dom")
let myName = '';
let jsInput;
let jsDiv;
let vDOM;

function createVDOM() {
  return [
    [
      'input',
      myName,
      function handle() {
        jsInput.value = myName;
      },
    ],
    ['div', `Hello, ${myName}!`],
  ];
}

function updateDOM() {
  vDOM = createVDOM();
  jsInput = convert(vDOM[0]);
  jsDiv = convert(vDOM[1]);
  document.body.replaceChildren(jsInput, jsDiv);
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.onInput = node[2];
  return element;
}

setInterval(updateDOM, 15);
