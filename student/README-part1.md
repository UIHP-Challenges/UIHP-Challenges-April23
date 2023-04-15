# The Hard Parts of UI Development - Challenges

## Summary

The purpose of these challenges is to learn an under-the-hood understanding of building user interfaces in the web browser. Each challenge will go hand-in-hand with a section of UI Hard Parts.

Part 1 will cover topics including HTML & markup in the web browser, JavaScript & the DOM API, and data-binding in UI development.

## How do I get started?

Download this [zip folder]() containing all of the files you'll need for these challenges. 

### Part 1: Building an Interactive UI

In UI Engineering we have **2 simple goals**:

    1) Display content (data) for users to see.

    2) Enable our users to interact with the content they see, and then change it.

1. First, let's take a look at the `index.html` file. Open it in the browser - to do this, in your terminal, make sure you have navigated to this directory, and run the command `open index.html`. This should automatically open the file in your default web browser.

What do you see? Your tab or window should show the text you see inside the `<title>` in `index.html`, but the page itself should be totally blank. You can also `inspect` the page and view your `html` code in Chrome DevTools. For more info about how to use Chrome DevTools, check out their [docs](https://developer.chrome.com/docs/devtools/).

2. Now, uncomment the `<div>` and an `<input>` in `index.html` and refresh the page in the browser. (Use `command + /` or `control + /` to comment/uncomment code) When our HTML loads now, it will populate the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) and we can see our input box on the page! Feel free to add some text to your `<div>` and refresh so that you can see it render to the page as well.

3. Next, type something into your input box. The pixels on the page show what you have typed - Remember that the underlying DOM data for the `input` node has also updated to reflect your change!

4. Uncomment the line containing the `stylesheet` in `index.html` to add some pizazz to our page - remember, when this loads, it will populate the [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model), similar to how our HTML populates the DOM with elements to render.

Now what? Even if we can change the data on the DOM, we can't do anything with that data or access it directly. Even if we had a button to click, we would still need some kind of logic to make something happen in the event that it is clicked. Our `html` is only being loaded once and we can't run any code in the DOM. Therefore, we need JavaScript to create, save, and update data.

5. Uncomment the `<script>` tag in `index.html`. This script acts as a link between the `html` and the code in the linked JavaScript file. When our `script` loads with our HTML in the browser, the JavaScript engine will start running and allow us to run our JS code in the browser directly (and access everything else we get with the JS runtime, including `memory` to store data).

        **Extension Challenge: Document Object** 
        - In our JavaScript runtime, we have access to some very useful APIs, including [document](https://developer.mozilla.org/en-US/docs/Web/API/Document). In `part1.js`, if you `console.log(document)`, you will see an object in the browser dev tools console. This `document` object also has a hidden property that acts as a link to the DOM.

6. In `part1.js`, declare a variable `post` and initialize it to a string that is your name. Congrats - we have data! Now, how can we use it to update the DOM and what we see in our view?

If you're unfamiliar with DOM manipulation, take a look at the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) on MDN, and particularly the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method (another hidden property on the `document` object!), which allows us to query the DOM to select a specific DOM element and create an object in our JavaScript memory with a hidden "link" to access it. That object will have "property-methods" to get or set the data on that DOM element.

7. Query the DOM to select the `input` node on the DOM and assign the resulting JS object to a variable called `jsInput`. Now do the same for the the `div` node on the DOM and assign the resulting JS object to a variable called `jsDiv`.

8. Let's use our JS data to update the DOM data. Our `jsDiv` object will have some "getter/setter" property-methods, including [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent). Set the `jsDiv.textContent` to be the value of our `post` variable. Refresh the page in the browser, and you should see that string as the text in the `div`.

---

\*\*\*edits to do below this line

edit post declaration to be empty string and delete setting textcontent on jsdiv

9. When the user types into the `input`, let's update our `post` variable to hold that text. Declare a function `handleInput` that will "handle" that user action/event. This way, we can change the underlying data & update the view. This function needs to grab the `value` from our `input` box (jsInput?) and then reassign the content of our `div` element (jsDiv?) to contain this value so that we can do something with it later.

10. Finally, let's create an `event handler` that will run our `handleInput` function as a callback in the event that a user writes something in the `<input>` field. There are several ways to do this, but one such method is the [`oninput`](https://www.w3schools.com/jsref/event_oninput.asp) Event handler. You can invoke this method on our `jsInput` element from the DOM and assign the value of our `handleInput` function (Not sure how much guidance to provide here).

We should now have a full User Interface (UI) which addresses our two main goals:

- Display content (data inside computer/from internet) as the 'view' for users to see, and
- Enable the user to interact (tap, click, etc) with the 'view' they see and change it (by changing the udnerlying data & updating the view).
