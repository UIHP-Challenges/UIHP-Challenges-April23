let myName = "";
let vDOM;
let elems;

function createVDOM() {
  return [
    [
      "input",
      myName,
      function handle(e) {
        myName = e.target.value;
      },
    ],
    ["div", `Hello, ${myName}!`],
    ["div", `Great job, Jonathan!`],
    ["div", `Great job, Alexa!`],
    ["div", `Great job, Emilia!`],
  ];
}

function updateDOM() {
  if (vDOM)
    document.activeElement == document.querySelector("input")
      ? (isFocus = true)
      : (isFocus = false); // keep this code
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
  if (isFocus) elems[0].focus(); //keep this code
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
