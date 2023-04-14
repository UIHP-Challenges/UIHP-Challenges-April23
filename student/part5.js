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
