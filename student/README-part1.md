# The Hard Parts of UI Development - Challenges

## Summary
The purpose of these challenges is to learn an under-the-hood understanding of building user interfaces in the web browser. Each challenge will go hand-in-hand with the live workshop presentation. Topics covered will include data-binding in UI development, HTML & markup in the web browser, and JavaScript & the DOM API. 

## How do I get started?

### Part 1: 
As you've learned in the workshop so far, `html` and `css` are what allows us to display content. Our goal, however, is to do more than just display content. We want users to be able to interact with the content they see (through taps or clicks, for example) and change the content (or underlying data) in some way. We can do this by implementing logic, sort of like a set of instructions, to run when a user interacts with the webpage. So, these are the two main goals:  
* Display content (data inside computer/from internet) as the 'view' for users to see, and 
* Enable the user to interact (tap, click, etc) with the 'view' they see and change it (by changing the udnerlying data & updating the view). 

1. First, let's take a look at the `index.html` file. Open it in the browser. To view the result of your code in the browser, navigate to challenges directory in the terminal - you may have to type in `"cd challenges"`. Once you're in the `challenges` folder, type in "open index.html". This should automatically open the file in your default web browser. 

What do you see? Your tab or window should have the title you see in `index.html`, which is "The Hard Parts of UI Development", but the page itself should be totally blank. You can also `inspect` the page and view your `html` code in Chrome DevTools. For more info about how to use Chrome DevTools, check out their [docs](https://developer.chrome.com/docs/devtools/). 


2. Now, uncomment the `<div>` and an `<input>` fields in `index.html` and refresh the page in the browser. (Use `command + /` or `control + /` to comment/uncomment code) We can see our input box on the page now! Feel free to add some text to your `<div>` so that you can see it render to the page as well. Next, type something into your input box. You can see the pixels on the page appear - whatever you typed in is in your input box, as expected. How exciting!

3. Next, uncomment the line containing the `stylesheet` in `index.html` to add some pizazz to our page. 

So as you can see, when we load our `html`, our `<input>` and `<div>` nodes are in the DOM and we're able to update the DOM 'data' - or the pixels rendered to the page - by typing into the input field on our page in the browser. 

Now what? We can't do anything with that data. Even if we had a button to click, we would still need some kind of logic that would tell that button what to do upon being clicked. Our `html` is only being loaded once and we can't run any code in the DOM. Therefore, we need JavaScript to create and save content/data. Then we can run our code to change that content/data. 

4. Uncomment the script for `part1.js` in `index.html`. This script acts as a link between the `html` and any JavaScript logic in the linked JavaScript file. 

5. Inside of `part1.js`, let's create some logic for updating the DOM. We can start with our `input` box. How can we "grab" the user's input from the DOM and store it in our JavaScript file so that we have the ability to do something with that information later? If you're unfamiliar with DOM manipulation, take a look at the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) on MDN, and particularly the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method, which allows us to select specific DOM elements and do something to them within our JS code.  Inversely, how can we use "property-methods" to add content/data from our JavaScript file to our DOM elements? To read more about one such property-method, take a look at the docs about [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).
    - Declare a variable `post` and assign it to the data type you would expect to come back from an input box. 
    - Select the `input` element (node?) from the DOM and assign it to a variable called `jsInput`.
    - Select the `div` element from the DOM and assign it to a variable called `jsDiv`. 

6. We're able to store the user's input to our JS file - now what? How can we enable the user to interact with the 'view' they see and change it?     
    - Let's add a function that will "handle" the action of our user adding input to our text box. This way, we can change the underlying data & update the view. Declare a function "handleInput". This function needs to grab the `value` from the `input` node on the DOM and then update the content of our `div` on the DOM to contain this value so that we can do something with it later. 

7. Finally, let's create an `event handler` that will call our `handleInput` function when a user writes something in the `<input>` field. There are several ways to do this, but one such method is the [`oninput`](https://www.w3schools.com/jsref/event_oninput.asp) Event handler. You can invoke this method on our `jsInput` element from the DOM and assign the value of our `handleInput` function.

We should now have a full User Interface (UI) which addresses our goals:
* Display content (data inside computer/from internet) as the 'view' for users to see, and 
* Enable the user to interact (tap, click, etc) with the 'view' they see and change it (by changing the udnerlying data & updating the view). 

