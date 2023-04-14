# The Hard Parts of UI Development - Challenges

## Summary

The purpose of these challenges is to learn an under-the-hood understanding of building user interfaces in the web browser. Each challenge will go hand-in-hand with a section of UI Hard Parts.

Part 1 will cover topics including HTML & markup in the web browser, JavaScript & the DOM API, and data-binding in UI development.

## How do I get started?

[add instructions to fork/clone repo or however we're going to do it]

- - -

## Part 1: Building an Interactive UI

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

   In our JavaScript runtime, we have access to some very useful APIs, including [document](https://developer.mozilla.org/en-US/docs/Web/API/Document). In `part1.js`, if you `console.log(document)`, you will see an object in the browser dev tools console. This `document` object also has a hidden property that acts as a link to the DOM.

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

- - -

## Part 2: One-way Data Binding 

Now that we have a simple application our users can interact with, how can we make our UI more sophisticated? One thing we can do is implement one-way data binding, a popular paradigm for tackling the essential engineering challenge of keeping data and the 'view' consistent. With one-way data binding, users are automatically updated when the source (provider) data changes, but not the other way around. 

1. In `index.html`, edit the script tag to use `part2.js` as the `src` file.

2. What if we wanted to add some placeholder text to the input box? In your JS file, set the `value` of the `input` box to be the string 'What's on your mind?' and refresh the browser.

3. Notice that the user needs to delete the placeholder text that is in the input box every time they want to type in a new input. Let's add a click handler `handleClick` for the input box which sets the value inside the input box to an empty string when clicked. HINT: Make sure to add `handleClick` to the input element.

Now we're changing our 'view' based on several different possible user interactions. How can we make these changes more predictable? Let's restrict every change to view to be via 
   - an update of 'data' 
   - a run of a single `dataToView` convertor function. 

4. To do this, let's create a function `dataToView`. It should:

   - Update the value in our input box on the DOM to be whatever `post` currently is. HINT: `post` should now start off as undefined, and if it is undefined when `dataToView` is invoked, we should populate the value in the input box to be the string containing 'What's on your mind?'. This also means `dataToView` needs to be invoked when the page is first loaded.

   - Update the content of the div on the DOM to be our current data.

5. Now that the `dataToView` function uses our JS data to update the DOM content, we need to make sure it is invoked after our data changes. What adjustments can we make to our event handlers so that they only make changes to the underlying data, and what should happen as soon as a change is made? 

6. While it may not be efficient, we can have our `dataToView` run so often that nay change to data will instantly propagate using a [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) function at a rate that is close to the browser refresh rate. Use `setInterval` to implement this. 

- - - 

### Part 3: The Virtual DOM


If you take a look at the `part3.js`, we now have our auto-updating view(from data) from the previous challenge. Right now, we are describing a key part of the UI in `dataToView`: The contents(data) and how to display it. What if we described the elements as well? This would make the `dataToView` convertor a complete description of the data and view.


1. To do this, let's first start by removing our `input` and `div` elements in our HTML file, since we are going to be creating and displaying our elements in the JavaScript file.


2. We will now declare a function `component`. We are going to be essentially combining everything into one function(`component`) that creates elements & relates data and view, which we call an `UI Component`, hence the function name. This will essentially replace the `dataToView` convertor, so also make adjust the setInterval method accordingly.


  1. Inside of `component`, let's start with reassigning the data variables we declared globally to be elements using `createElement`.(Note: when moved logic from dataToView, comment out when added to component) We will also no longer need to be selecting these elements because we are creating them here. If you are not familiar with the `createElement` method, first take a look at the docs: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement


  2. We are also going to want to move our `handleInput` function to be inside `component` because we will also be adding `handleInput` to the `jsInput` element in `component` as well. Remember, this UI component will be tying data to view and handling how users change data.


  3. Now that our elements are made, we can now set the value of `jsInput`, along with the text content of `jsDiv` to be our `post` data.


  4. Load up our HTML file in the browser. You can see that our elements are not showing up on the DOM. This is because we have not yet appended our elements to the document. We can do this by replacing all of the existing children of our parent element, which in this case is `document.body`(body of DOM), with our newly created elements, `jsInput` and `jsDiv` using `replaceChildren`. For reference, here is the documentation for the `replaceChildren` method: https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren


3. Now, we should be able to see our component on the screen! We will now shift over to making our Virtual DOM in JavaScript. To do this, we are going to have to tweak our code a bit. Before continuing, change the label for the `post` variable to be `userName`. Now, let's start by declaring the global variable `vDOM` that we will be building out later, and our `createVDOM` function. `createVDOM` is going to be returning an array with all of the details of our elements, which themselves will be arrays. We will have two arrays:


  1. The first array in the returned array from `createVDOM` will have 3 elements, `"input"`, `userName`, and a function `handle` that assigns `userName` to the value of `jsInput` (`handle` in this case replaces the `handleInput` event handler). This array will contain the details for `jsInput` down the line.


  `Quick Refresher`: In this challenge, we are going to be using `string interpolation`, or template literals, to include `"visual"` code to our application. Imagine we wanted the text content of a div element to be the string "I live in (user's location)!". If we were to do this, we can use the `concat` method to build out our `textContent` line by line:


  ```javascript
  let userLocation = "LA";


  let textToDisplay = "I live in ";
  textToDisplay = textToDisplay.concat(userLocation);
  textToDisplay = textToDisplay.concat("!");
  ```


  Remember, the closer we get our code to mirror what it's actual visual/graphic output looks like, the easier it is for us as developers. So, to make this code look more `"visual"`, we can use a template literal with backticks:


  ```javascript
  textToDisplay = `I live in ${userLocation}!`;
  ```


  As we can see, this looks a lot more semantic. Now, we can something similar here creating visual elements.


  2. The second array is only going to have 2 elements, `"div"` and the template literal `Hello, ${userName}!`. This will of course be the details for `jsDiv`.


4. We are now going to want to create a function that converts our pieces of `view` in the virtual DOM to elements. Declare a function `convert` that has one parameter, `node`(array of details). `convert` should:


  1. Declare a constant `element` that is initialized to a new element by passing the first element) in `node` as an argument to `createElement`.


  2. Assign both the `textContent` and `value` properties on `element` to be the second element in `node`.


  3. Assign the `oninput` property on `element` to be the third element in `node`.


  4. Finally, return `element`.


5. At this point, we have a function that returns an array details for our elements, `createVDOM`, and a function that converts those details into actual elements, `convert`. So, now we just need a function that actually updates. Declare the function `updateDOM` that will now act as our convertor. `updateDOM` will:


  1. Update our `vDOM` variable to be the returned result of invoking `createDOM()`. `vDOM` will now contain the details we need to make our elements.


  2. Update `jsInput` to be the returned result of the invoking `convert`, passing the first element in `vDOM`(details array for input element) as an argument.


  3. Update `jsDiv` to be the returned result of invoking `convert`, passing the second element in `vDOM`(details array for div element) as an argument.


  4. We now have our elements created, but we need to append them to the dom using `replaceChildren`, passing in `jsInput` and `jsDiv` as arguments on the `body` property on the `document` object.


6. The final change we need to make is with out `setInterval` method. Since `updateDOM` is now the function that updates the DOM, that is the function that needs to be passed into `setInterval`.

- - -

## Part 4: Flexible DOM Composition

So far, we have created a "virtual" DOM in JavaScript to be a visual representation of our actual DOM elements, and combined it with one-way data binding. This means our JS data is our "single source of truth" and our `vDOM` is always consistent with the actual DOM.

Right now, our `vDOM` is a list of 2 arrays with their element details - but in the "real world" we'll likely have hundreds (or thousands!) of DOM elements to create. We need tools to deal with lists - in this case, we are using an `array` to create our list.

1. In `index.html`, edit the `script` tag to use `part4.js` as the `src` file.

In `part4.js`, we have a `vDOM` variable (a LIST of subarrays with element details). We also have the same `convert` function we used before to create a DOM element and corresponding linked JavaScript object with the info in one of our vDOM subarrays. Previously, we manually called `convert` on vDOM[0] and vDOM[1]. However, if we have hundreds or thousands of DOM elements to create, this approach is not very efficient or flexible.

2. How can we make sure we always run our `convert` function on each subarray of our `vDOM`, no matter how many there are or if the number of elements in our vDOM changes? (HINT: since we are working with an `array`, we can use the `map` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).

3. Store the resulting _list_ of "converted" JS objects with linked DOM elements in a new variable called `elems`.

4. Now our new elements exist on the DOM - what do we need to do to render them to the page? How can we make sure each of our `elems` is appended to the DOM, no matter how many there are?

5. Add 1-2 extra `div` subarrays to the `vDOM` and refresh the page - we can now flexibly convert however many elements we have in our vDOM!

With our new "element-flexible" code, we can "compose" our DOM elements.

6. Comment out all of the code at the top of the file, and uncomment all the code below the marked line (this should look familiar - the same `createVDOM`, `updateDOM`, and `convert` functions we used before).

7. Edit the `updateDOM` function to flexibly handle an unknown amount of elements in the vDOM. Make sure that all of the `elems` we create are appended to the DOM to replace the previous child elements.

8. Add another element (or a few) to the vDOM in `createVDOM` - again, no other code should have to change and they should all render properly.

9. For even more flexibility in our code, we can edit our `input` event handler function to use the [event API](https://developer.mozilla.org/en-US/docs/Web/API/Event) and [target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

We're getting semi-visual coding - yay! 