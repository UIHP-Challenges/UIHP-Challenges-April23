## Part 4: Flexible DOM Composition

### Section A - Manipulating Lists

- update script tag `src` in html file

- open part 4 js file

- see `vDOM` variable (a LIST of subarrays with element details)

- see `convert` function we used before to create a DOM element with the info in one of our subarrays

- declare a variable `elems` to store a _list_ of DOM elements to render

- use `map` method to create that list of elems - by using `convert` as the callback to run on each subarray of our vDOM

- append all of the DOM elements linked through the objects we stored in `elems` to the body of the DOM

- maybe add more elements to vDOM, still works

### Section B

- go back to code we had before this section

- edit `updateDOM` function to handle arbitrary amount of elements in vDOM - and however many `elems` we have created on the DOM, make sure they are all appended

- add more elements to vDOM - no other code has to change to handle properly

- also edit event handler to handle any event (w/ e.target)
