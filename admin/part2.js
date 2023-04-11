/**
 * 
 * Part 2: One-Way Data Binding
HTML has input and div, JS has basically where part 1 left off
Add click handler/default or starting text in input box
Extension - also add button to submit?
One-way data binding - create one function to update DOM with any updated data
Call that function inside event handlers, after js data is updated
Auto-update - use setInterval to call dataToView instead of inside handlers
**ADD ONFOCUS TO RE-FOCUS CLICK IN INPUT
 *

*/


//the end product should look like this (slide 23): 

let post = undefined; // Data 

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');

function dataToView(){ // JS -> DOM
    jsInput.value = 
        post == undefined ? `What's on your mind?`: post 
    jsDiv.textContent = post 
}

function handleInput(){
    post = jsInput.value
};

function handleClick(){
    post = '';
}

jsInput.oninput = handleInput;
jsInput.onclick = handleClick;

setInterval(dataToView, 15);