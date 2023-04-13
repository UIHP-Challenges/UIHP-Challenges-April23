let post = '';

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');

function handleInput(){
    post = jsInput.value
    jsDiv.textContent = post 
};

jsInput.oninput = handleInput;

// How do I get started? refactor intro

