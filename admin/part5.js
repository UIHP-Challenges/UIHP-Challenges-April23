/**
 * Part 5: Performance Fixes
HTML and JS start where we left off (slide 36)
Hooks
Create function to update name data, and call updateDOM within it - avoid looping/repeated calls w/ setinterval
Then change updateName function to be able to update any data, not just ‘name’
Extension - request animation frame
Diffing
Create diffing algo to compare current vDOM to previous vDOM
And then update only DOM elements that need to
Edit updateDOM to use diffing algo and reassign values for previous and current DOM

 * 
 */

// final solution code (slide 43)

let myName = ''; let vDOM = createVDOM(), prevVDOM, elems;

function createVDOM(){
    return [['input', myName, function handle (e){ myName = e.target.value}],
    ['div', `Hello, ${myName}!`], 
    ['div', `Great job, Jonathan!`], 
    ['div', `Great job, Alexa!`],
    ['div', `Great job, Emilia!`]]
}; 

function updateDom(){
    prevVDOM = [...vDOM]; 
    if(elems = undefined){
        elemens = vDOM.map(convert)
        document.body.append(...elems)
    }
    else { findDiff(prevVDOM, vDOM) }
}

function convert(node){
    const element = document.createElement(node[0])
    element.textContent = node[1]
    element.value = node[1]
    element.oninput = node[2]
    return element
}

function findDiff(prevVDOM, currentVDOM) { 
    for (let i = 0; i < currentVDOM.length; i++) {
        if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
            elems[i].textContent = currentVDOM[i][1];
            elems[i].value = currentVDOM[i][1];
        }
    }
}

setInterval(updateDOM, 15);