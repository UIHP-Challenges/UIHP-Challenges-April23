let post = "";

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

// jsInput.value = "What's on your mind?"; /* <- Include? */

function handleInput() {
  post = jsInput.value;
  jsDiv.textContent = post;
}

jsInput.oninput = handleInput;
