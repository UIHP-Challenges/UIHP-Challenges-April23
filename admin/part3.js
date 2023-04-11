/**

Part 3: the Virtual/Visual DOM
HTML has input and div, JS where we left off part 2
Create component - delete elements from html file, create in js instead
One component function will create elements, add event handlers, update js data, and update DOM
Add string interpolation by creating a new variable
Create convert function - takes in info for a DOM node, creates one, output JS object with link to new DOM node
Also create divInfo variable to hold info about new DOM node
Create new div that way
Create VDOM
Use new VDOM to create updateDOM function
 * 
 */
//Example of solution code (slide30)
let myName = 'Jo'; 

const divInfo = ['div', `Hi, ${myName}!`]; 

function convert(node){
    const elem = document.createElement(node[0])
    elem.textContent = node[1]
    return elem
};

const jsDiv = convert(divInfo);