/**
 * Part 4: Flexible DOM Composition
HTML should only have JS file in script tag, JS start where we left off but have it commented out
At top of file, basically have slides 33-35
Walk through using “list tools” (map and spread) to handle arbitrary amount of things in our VDOM
Then comment that out and uncomment code from where we left off
Then edit updateDOM function to use map w/ convert and spread to update children
Extension - directives (slide 51)
Extension - functional components

 * 
 */

/* starting code for this section
second half (where we left off at end of part 3) commented out */

const vDOM = [
  [
    'input',
    myName,
    function handle() {
      myName = jsInput.value;
    },
  ],
  ['div', `Hello, ${myName}!`],
];

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

// let myName = '';
// let jsInput;
// let jsDiv;
// let vDOM;

// function createVDOM() {
//   return [
//     [
//       'input',
//       myName,
//       function handle() {
//         myName = jsInput.value;
//       },
//     ],
//     ['div', `Hello, ${myName}!`],
//   ];
// }

// function updateDOM() {
//   vDOM = createVDOM();
//   jsInput = convert(vDOM[0]);
//   jsDiv = convert(vDOM[1]);
//   document.body.replaceChildren(jsInput, jsDiv);
// }

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

// setInterval(updateDOM, 15);

/* first half of "solution" 
w/ map and spread for list manipulation */

const vDOM = [
  [
    'input',
    myName,
    function handle() {
      myName = jsInput.value;
    },
  ],
  ['div', `Hello, ${myName}!`],
];

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

const elems = vDOM.map(convert);
document.body.append(...elems);

// let myName = '';
// let jsInput;
// let jsDiv;
// let vDOM;

// function createVDOM() {
//   return [
//     [
//       'input',
//       myName,
//       function handle() {
//         myName = jsInput.value;
//       },
//     ],
//     ['div', `Hello, ${myName}!`],
//   ];
// }

// function updateDOM() {
//   vDOM = createVDOM();
//   jsInput = convert(vDOM[0]);
//   jsDiv = convert(vDOM[1]);
//   document.body.replaceChildren(jsInput, jsDiv);
// }

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

// setInterval(updateDOM, 15);

/*slide 36 - what 'student' code should essentially look like at end of part 4 
first half commented out, edited updateDOM and event handler*/

// const vDOM = [
//   [
//     'input',
//     myName,
//     function handle() {
//       myName = jsInput.value;
//     },
//   ],
//   ['div', `Hello, ${myName}!`],
// ];

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

// const elems = vDOM.map(convert);
// document.body.append(...elems);

let myName = '';
let jsInput;
let jsDiv;
let vDOM;

function createVDOM() {
  return [
    [
      'input',
      myName,
      function handle(e) {
        myName = e.target.value;
      },
    ],
    ['div', `Hello, ${myName}!`],
    ['div', `Great job, Jonathan!`],
    ['div', `Great job, Alexa!`],
    ['div', `Great job, Emilia!`],
  ];
}

function updateDom() {
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

setInterval(updateDOM, 15);
