let myName = '';

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

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

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
//     const element = document.createElement(node[0]);
//     element.textContent = node[1];
//     element.value = node[1];
//     element.oninput = node[2];
//     return element;
//   }

// setInterval(updateDOM, 15);
