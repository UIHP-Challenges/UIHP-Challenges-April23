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

//slide 36 
let myName = ''; let vDOM, elems; 

function createVDOM(){
    return [['input', myName, function handle (e){ myName = e.target.value}],
    ['div', `Hello, ${myName}!`], 
    ['div', `Great job, Jonathan!`], 
    ['div', `Great job, Alexa!`],
    ['div', `Great job, Emilia!`]]
}; 

function updateDom(){
    vDOM = createVDOM()
    elems = vDOM.map(convert)
    document.body.replaceChildren(...elems)
}

function convert(node){
    const element = document.createElement(node[0])
    element.textContent = node[1]
    element.value = node[1]
    element.oninput = node[2]
    return element
}

setInterval(updateDOM, 15); 
