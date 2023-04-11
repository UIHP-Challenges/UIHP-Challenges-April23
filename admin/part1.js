/**
 * From google doc: 
 * 
 * Part 1: Display content, let user interaction change underlying data, let underlying data update the DOM
 * 
 * Steps to follow: 
 *  
 * HTML is blank, JS has some declared variables
        Start with blank html file
        Add an element or two
        Then open it to see it render on the page
        Add some styling with css
        Type in input to update DOM data
        Add javascript to html file in script tag
        Create some js data (or just uncomment it)
        Use js to create link to dom element
        Then use js to update dom data (like text in a div)
        Then add event handler to let user update our js data
        Then update dom data with js
 * 
 * 
 * Why do we need to use JS to implement functionality? What would happen if we 
 * tried to everything in our html file? 
 * 
 * Html only loads once 
 * 
 * Display elements with html - open in the browser to see the elements rendered to the page
 * Add some styling to styles.css
 * Update the underlying DOM in our html - type in input  
 * Then uncomment the part1 script in html 
 * Then we add JS to part1js file so that we can change the data 
 *  Add text to a div first 
 *  So when it's loaded, we see new text comes from JS not from our html
 */

// an example of solution code (slide18);

//declare a variable and assign it the value of a querySelector of input 





//the end product should look like this: 
let post = '';

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');

function handleInput(){
    post = jsInput.value
    jsDiv.textContent = post 
};

jsInput.oninput = handleInput