// let isFocus = false;

let post = undefined; // Data

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

function dataToView() {
  // JS -> DOM
  jsInput.value = post == undefined ? `What's on your mind?` : post;
  jsDiv.textContent = post;
}

function handleInput() {
  post = jsInput.value;
}

jsInput.oninput = handleInput;

setInterval(dataToView, 15);

//ONCE YOU HAVE BUILT OUT "component" function: <- change to after they complete part #?

//1. Uncomment line 1

//2. At the very beginning of the "component" function, add this line:
/* document.activeElement === jsInput ? (isFocus = true) : (isFocus = false); */

//3. At the very end of the "component" function, ad the following line:
/* if (isFocus) jsInput.focus(); */

//ONCE YOU HAVE BUILT OUT "updateDOM" function: <- change to after they complete part #?

//1. At the very beginning of the "updateDOM" function, add this line:
/* document.activeElement === jsInput ? (isFocus = true) : (isFocus = false); */

//2. At the very end of the "updateDOM" function, ad the following line:
/* if (isFocus) jsInput.focus(); */
