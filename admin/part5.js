/**
 * 
 * Student should start with the following code: 
 * 
let myName = '';
let vDOM;
let elems;

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

// function findDiff(prevVDOM, currentVDOM) { 
//     for (let i = 0; i < currentVDOM.length; i++) {
//         if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
//             // change the actual DOM element related to that vDOM element!
//         }
//     }
// }

setInterval(updateDOM, 15);

- - - - - - - - - - - - - - - - -

Then, we can create the `updateName` function to create a "hook" and get rid of the `setInterval`.

let myName = '';
let vDOM;
let elems;

function updateName(value) {
    myName = value
    updateDOM()
};

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

// function findDiff(prevVDOM, currentVDOM) { 
//     for (let i = 0; i < currentVDOM.length; i++) {
//         if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
//             // change the actual DOM element related to that vDOM element!
//         }
//     }
// }

updateDOM();

- - - - - - - - - - - - - - - - -

Then, we would want them to refactor `updateName` to work for any data in our app: 

const data = {name = ''};
let vDOM;
let elems;

function updateData(label, value) {
    data[label] = value;
    updateDOM()
};

function createVDOM() {
  return [
    [
      'input',
      data.name,
      function handle(e){updateData('name', e.target.value)}];
      },
    ],
    ['div', `Hello, ${data.name}!`],
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

// function findDiff(prevVDOM, currentVDOM) { 
//     for (let i = 0; i < currentVDOM.length; i++) {
//         if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
//             // change the actual DOM element related to that vDOM element!
//         }
//     }
// }

updateDOM();

- - - - - - - - - 

Then, we want them to finish writing the diffing alogirthm and update the `updateDOM` function to include logic relating to this diffing function. They should also include setInterval again. 

const data = {name = ''};
let vDOM;
let elems;

function updateData(label, value) {
    data[label] = value;
    updateDOM()
};

function createVDOM() {
  return [
    [
      'input',
      data.name,
      function handle(e){updateData('name', e.target.value)}];
      },
    ],
    ['div', `Hello, ${data.name}!`],
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

function findDiff(prevVDOM, currentVDOM) { 
    for (let i = 0; i < currentVDOM.length; i++) {
        if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
            // change the actual DOM element related to that vDOM element!
        }
    }
}

setInterval(updateDom(), 15);
 */

let myName = '';
let vDOM = createVDOM(),
  prevVDOM,
  elems;

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
  prevVDOM = [...vDOM];
  if ((elems = undefined)) {
    elemens = vDOM.map(convert);
    document.body.append(...elems);
  } else {
    findDiff(prevVDOM, vDOM);
  }
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function findDiff(prevVDOM, currentVDOM) {
  for (let i = 0; i < currentVDOM.length; i++) {
    if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
      elems[i].textContent = currentVDOM[i][1];
      elems[i].value = currentVDOM[i][1];
    }
  }
}

setInterval(updateDom(), 15);
