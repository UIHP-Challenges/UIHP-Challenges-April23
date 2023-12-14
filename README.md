# The Hard Parts of UI Development - Challenges

## Summary

The purpose of these challenges is to gain an under-the-hood understanding of building user interfaces in the web browser. Each challenge will go hand-in-hand with a section of [The Hard Parts of UI Development Course](https://frontendmasters.com/courses/hard-parts-ui-dev/) by Will Sentance from [Frontend Masters](https://frontendmasters.com/).

Throughout these challenges, we will cover topics including HTML, JavaScript, & the DOM API in the web browser; one-way data binding and "state-driven" views; the virtual DOM and "composable" UI; and performance optimizations.

---

## Part 1: Building an Interactive UI

In UI Engineering we have **2 simple goals**:

- Display content (data) for users to see.
- Enable our users to interact with the content they see, and then change it.

1. First, let's take a look at the `index.html` file. Open it in the browser.
   - To do this in your terminal, make sure you have navigated to the correct directory and run the command `open index.html`. This should automatically open the file in your default web browser.

What do you see? Your tab or window should show the text you see inside the `<title>` in `index.html`, but the page itself should be totally blank. You can also `inspect` the page and view your `html` code in Chrome DevTools. For more info about how to use Chrome DevTools, check out their [docs](https://developer.chrome.com/docs/devtools/).

2. Now, uncomment the `<div>` and `<input>` in `index.html` and refresh the page in the browser. (Use `command + /` or `control + /` to comment/uncomment code) When our HTML loads now, it will populate the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) and we can see our input box on the page! Feel free to add some text to your `<div>` and refresh so that you can see it render to the page as well.

3. Next, type something into your input box. The pixels on the page show what you have typed - Remember that the underlying DOM data for the `input` node has also updated to reflect your change!

4. Uncomment the line containing the `stylesheet` in `index.html` to add some pizazz to our page - remember, when this loads, it will populate the [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model), similar to how our HTML populates the DOM with elements to render.

Now what? Even if we can change the data on the DOM, we can't do anything with that data or access it directly. We would still need some kind of logic to make something happen in the event that a user types in our input or a button is clicked. Our `html` is only being loaded once and we can't run any code in the DOM. Therefore, we need JavaScript to create, save, and update data.

5. Uncomment the `<script>` tag in `index.html`. This script acts as a link between the `html` and the code in the linked JavaScript file. When our `script` loads with our HTML in the browser, the JavaScript engine will start running and allow us to run our JS code in the browser directly (and access everything else we get with the JS runtime, including `memory` to store data).

---

**_Extension Challenge: Document Object_**
_- In our JavaScript runtime, we have access to some very useful APIs, including [document](https://developer.mozilla.org/en-US/docs/Web/API/Document). In `part1.js`, if you `console.log(document)`, you will see an object in the browser dev tools console. This `document` object also has a hidden property that acts as a link to the DOM._

---

6. In `part1.js`, declare a variable `'post'` and initialize it to a string that is your name. Congrats - we have data! Now, how can we use it to update the DOM and what we see in our view?

If you're unfamiliar with DOM manipulation, take a look at the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) on MDN, and particularly the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method (a hidden property on the `document` object), which allows us to query the DOM to select a specific DOM element and create an object in our JavaScript memory with a hidden "link" to access it. That object will have "property-methods" to get or set the data on that DOM element.

7. Query the DOM to select the `input` node on the DOM and assign the resulting JS object to a variable called `'jsInput'`. Now do the same for the the `div` node on the DOM and assign the resulting JS object to a variable called `'jsDiv'`.

8. Let's use our JS data to update the DOM data. Our `jsDiv` object will have some "getter/setter" property-methods, including [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent). Set the `jsDiv.textContent` to be the value of our `post` variable. Refresh the page in the browser, and you should see that string as the text in the `div`.

9. Now let's update our JavaScript data based on our user interactions. First, edit your variable declaration for `post` at the top of the file to initialize it to an empty string instead.

   Declare a function `'handleInput'` that will "handle" what we want to do with what the user types in the input. Use the `value` getter/setter method available on our `jsInput` object. When the user types into the `input`, reassign `post` to hold that text.

   Set the `textContent` on the `div` to to be the value of `post` here in `handleInput` instead.

10. Finally, let's create an `event handler` that will run our `handleInput` function in the event that a user types in `input`. There are several ways to do this, but one is the [`oninput`](https://www.w3schools.com/jsref/event_oninput.asp) property on the `jsInput` object. Us this to set `handleInput` on our input DOM element as a callback.

We should now have a full User Interface (UI) which addresses our two main goals:

- Display content (data inside computer/from internet) as the 'view' for users to see, and
- Enable the user to interact (tap, click, etc) with the 'view' they see and change it (by changing the udnerlying data & updating the view).

---

## Part 2: One-way Data Binding

Now that we have a simple application our users can interact with, how can we make our UI more sophisticated? One thing we can do is implement one-way data binding, a popular paradigm for tackling the essential engineering challenge of keeping the 'view' consistent with (and dependent on) our underlying data.

1. In `index.html`, edit the script tag to use `part2.js` as the `src` file.

2. What if we wanted to add some placeholder text to the input box? In your JS file, set the `value` of the `input` box to be the string 'What's on your mind?' and refresh the browser.

Click into the input and type something. Notice that the user needs to manually delete the placeholder text that is in the input box every time they want to type in a new input.

3. Let's add a click handler `'handleClick'` for the input box which sets the `value` inside the input box to an empty string when the user clicks in it to type. HINT: Make sure to add `handleClick` as a callback to the input element.

Now we're changing our 'view' based on several different possible user interactions. How can we make these changes more predictable? Let's restrict every change to view to be via:

- an update of 'data'
- a run of a single `dataToView` convertor function.

4. To do this, let's create a function `'dataToView'`. It should:

   - Update the value in our input box on the DOM to be whatever `post` currently is. HINT: `post` should now start off as undefined, and if it is undefined when `dataToView` is invoked, we should populate the value in the input box to be the string containing 'What's on your mind?'. This also means `dataToView` needs to be invoked when the page is first loaded.

   - Update the content of the div on the DOM to be our current data.

5. Now that the `dataToView` function uses our JS data to update the DOM content, we need to make sure it is invoked after our data changes. What adjustments can we make to our event handlers so that they only make changes to the underlying data, and what should happen as soon as a change is made?

6. While it may not be efficient, we can have our `dataToView` run so often that any change to data will instantly propagate using a [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) function at a rate that is close to the browser refresh rate.

---

**_Extension Challenge: Submit Button_** <br/>
_Add a submit button that will create and save a new post. How can you implement this kind of functionality in your application? In addition, set up some logic for creating divs that hold previous 'posts' so that the user is able to see all their previous posts._

---

## Part 3: The Virtual DOM

In our first two UI Hard Parts challenges, we displayed content and let our users interact with it to change the underlying data, and implemented one-way data binding to ensure our view is always dependent on and consistent with that data.

In `part3.js`, we are describing key parts of the UI in `dataToView`: the contents (data) and how to display it. What if we described the elements as well? This would make our funnction a complete description of the data _and_ view.

1. In `index.html`, edit the `script` tag to use `part3.js` as the `src` file. Then comment out or delete the `input` and `div` elements.

Instead, let's create our DOM elements with JavaScript. A `UI Component` is a function that fully creates elements and relates their data to the view.

2. In `part3.js`, uncomment the function `'component'` and build it out. You will see it has already been started for you.

   - The first and last lines of code in this function are there to make sure that once your user has clicked in the input, they will stay "clicked" and able to type as `component` is repeatedly called (hint!) to auto-update the DOM.

   This function will combine all of our previous functionality into one:

   - [Creating](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) DOM elements (instead of selecting them).
     - Feel free to keep the `jsInput` and `jsDiv` variable declarations at the top of the file, but unitialized - you will reassign the values to be the new objects you create.
   - Setting their contents based on our JS data.
     - Once this happens inside `component`, we should no longer need our `dataToView` function.
   - Creating and attaching event handlers to them.
   - Displaying our new DOM elements in the view.

   In order to achieve this last step, we need to attach or `append` them to the body of the DOM. There a a couple of ways to do this, but to make sure we are replacing our nodes with an updated version when our data changes (instead of accidentally attaching multiple copies of our input or div), use [replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren).

Now, our view should look the same as it did before, but our code should consist of 3 parts - our declared variables at the top of the file, the `component` function (where all of our functionality will be now), and `setInterval`.

However, our code is still fairly imperative - just glancing at it, it's hard to tell what our view will look like. The more "visual" our code is (like HTML), the easier it is for us to work with as developers.

For example - imagine we wanted the text content of a div element to be the string "I live in (user's location)!". We can use the `concat` method to build out our string piece by piece:

```javascript
let userLocation = 'LA';

let textToDisplay = 'I live in ';
textToDisplay = textToDisplay.concat(userLocation);
textToDisplay = textToDisplay.concat('!');
```

However, this is not very visual or declarative. So instead, we can use a `template literal` with `string interpolation`:

```javascript
textToDisplay = `I live in ${userLocation}!`;
```

As we can see, this mirrors what our visual/graphic output will be. Could we do something similar with our main code creating visual elements?

Let's start with a "unit of code" representing each piece of our view.

```javascript
const divInfo = ['div', `Hi, ${myName}!`];
```

In this example, our `divInfo` is an array with the details of a DOM element - just by looking at our code, we can tell what it will look like (the type (div) and the text that will display inside).

3. In `part3.js`, write a function `'convert'` that will take in a `node` (an array of details like our 'divInfo' example above). This function should use that array to create a new DOM element and set its content, and return its linked JavaScript object.

   With this function, we can now produce DOM elements from any list of info that visually mirrors what we will see in our view.

Next, let's create our `virtual DOM` - blocks of code (or a _list_) representing each piece of our view.

4. Declare a global variable `'vDOM'` but do not initialize it.

5. Write a function `'createVDOM'` that returns a list (array) containing the following two sub-arrays:

```javascript
[
  'input',
  myName,
  function handle() {
    myName = jsInput.value;
  },
],
['div', `Hello, ${myName}!`];
```

- Notice that in each sub-array, index `[0]` is the type of DOM element we want to create, index `[1]` has details of what we want that element to contain or display, and index `[2]` is an event handler callback function.

6. Edit the `convert` function to make sure it will properly convert each sub-array in our `vDOM` into a DOM element, accounting for the different properties on different element types, as well as setting any event handlers.

7. Declare a function `'updateDOM'`. This function will:
   - Update our `vDOM` variable to be the returned result of invoking `createVDOM()`.
   - Use the `convert` function with our new `vDOM` details to update `jsInput` and `jsDiv` with a new DOM element (linked through a JS object).
   - Replace any children on the body of the DOM with our new elements.
   - Re-set the `focus` to be on the input if it has been clicked on (feel free to copy this code from the `component` function where it was given to you).

Now, all of `component`'s functionality should be replaced by the `convert` and `updateDOM` functions.

8. Since `updateDOM` is now the function that updates the DOM with our current data, make sure that it is being called regularly so any data changes will reflect on the DOM.

---

**_Extension Challenge: Adding Nested Elements to the Virtual DOM_** <br/>
_What if we wanted more control over placement - what if we had nested elements? Add a few nested elements to the `createVDOM` function return. How might you adjust your `convert` function so that it can handle nested elements in the vDOM using semi-visual coding?_

---

## Part 4: Flexible DOM Composition

So far, we have created a "virtual" DOM in JavaScript to be a visual representation of our actual DOM elements, and combined it with one-way data binding. This means our JS data is our "single source of truth" and our `vDOM` is always consistent with the actual DOM.

Right now, our `vDOM` is a list of 2 arrays with their element details - but in the "real world" we'll likely have hundreds (or thousands!) of DOM elements to create. We need tools to deal with lists - in this case, we are using an `array` to create our list.

1. In `index.html`, edit the `script` tag to use `part4.js` as the `src` file.

In `part4.js`, we have a `vDOM` variable (a LIST of subarrays with element details). We also have the same `convert` function we used before to create a DOM element and corresponding linked JavaScript object with the info in one of our vDOM subarrays. Previously, we manually called `convert` on vDOM[0] and vDOM[1]. However, if we have hundreds or thousands of DOM elements to create, this approach is not very efficient or flexible.

2. How can we make sure we always run our `convert` function on each subarray of our `vDOM`, no matter how many there are or if the number of elements in our vDOM changes? (HINT: since we are working with an `array`, we can use the `map` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).

3. Store the resulting _list_ of "converted" JS objects with linked DOM elements in a new variable called `'elems'`.

4. Now our new elements exist on the DOM - what do we need to do to render them to the page? How can we make sure each of our `elems` is appended to the DOM, no matter how many there are?

5. Add 1-2 extra `div` subarrays to the `vDOM` and refresh the page - we can now flexibly convert however many elements we have in our vDOM!

With our new "element-flexible" code, we can "compose" our DOM elements.

6. Comment out all of the code at the top of the file, and uncomment all the code below the marked line (this should look familiar - the same `createVDOM`, `updateDOM`, and `convert` functions we used before).

7. Edit the `updateDOM` function to flexibly handle an unknown amount of elements in the vDOM. Make sure that all of the `elems` we create are appended to the DOM to replace the previous child elements.

8. Add another element (or a few) to the vDOM in `createVDOM` - again, no other code should have to change and they should all render properly.

9. For even more flexibility in our code, we can edit our `input` event handler function to use the [event API](https://developer.mozilla.org/en-US/docs/Web/API/Event) and [target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

We're getting semi-visual coding - yay!

---

**_Extension Challenges: Additional Functionality_**
<br/>

**_Directives:_** <br/>
_Another way that we can give our elements more functionality is by creating functions that take in our element and "decorate it" with added functionality before returning it. In this case, each element on the page has a chance to "do" something in the user's eyes. In reality, that "doing" is happening in JavaScript (e.g. checking a conditional, a loop, etc) and then updating the view (DOM). Try making your elements store some kind of functionality._

**_Functional Components:_** <br/>
_We can also improve our VDOM elements to include additional functionality by creating our elements with a function. This function returns the element out, but before it does, it can run JavaScript code to determine exactly what will be returned. How would you refactor your elements to make them functional in this way? Popular UI frameworks such as React embrace this style of engineering, so if you haven't explored functional components yet, now's your chance!_

---

## Part 5: Hooks & Diffing

Now we've learned to use a "Virtual" DOM for semi-visual coding and we've also created 'element-flexible' code to 'compose' our DOM elements. However, completely rebuilding the entire DOM from scratch every 15 milliseconds makes for terrible performance - as is, our lovely vDOM is quite unusable. We need to add efficiency.

1. In `index.html`, edit the `script` tag to use `part5.js` as the `src` file.

2. First, let's get rid of the `setInterval` to avoid repeated function calls to `updateDOM`.
   - However, we still need to make sure we create our vDOM and populate the DOM with elements on our initial load/render.

We _could_ call `updateDOM` on every data change (like we did previously inside our event handlers) - but that only works if we _actually_ remember to invoke it everywhere we'd need to, which is unlikely (especially if we have thousands of user actions to handle) - so then our vDOM isn't "real" or guaranteed to accurately reflect our data.

What if, instead of directly updating our data, we run a function to do so?

3. Initialize a function `'updateName'` which takes in a `value`. This function should reassign `myName` to be the passed-in value.

   - `updateName` should _also_ make sure the DOM is updated after we update our data.

4. Make sure any part of your code that previously updated `myName` directly is edited to use `updateName` instead.

If we _only_ ever update `myName` with our new `updateName` function - instead of updating `myName` directly - we can be sure that our DOM is always updated after a data change.

- We would likely "lock down" `myName` so that it cannot be accessed directly (or updated from outside of our updater function).

What if we had more data to manage than `myName`? (Realistically, we would - _much_ more.) Our `updateName` function is great - but can we refactor it so that it works for _any_ piece of data we might have that our view is dependent on?

5. First, declare a new variable `'data'` at the top of our file, and initialize it to an object. Instead of declaring `myName` separately, nest it inside `data` as a key-value pair. That way, our data "store" is more flexible and we can add more things to it as needed.

6. Since we want to make the `updateName` function work with any data, edit it to be called `'updateData'` instead. Have it take in a `'label'` in addition to the `value`.

7. `updateData` should do two things:

   - Update the `value` on our `data` object that is stored under the passed in `label` (or create it if it does not already exist).
   - Update the DOM after our data has been changed.

8. Since we have just implemented changes to the structure of our `data`, as well as our `updateData` function, make sure that any place in our code that references our data or updates it is adjusted accordingly.

Now, `updateData` works to update any piece of data - or _state_ - and so allows us to just "hook" into it. We have a "state hook"!

---

**_Extension Challenge: requestAnimationFrame()_** <br/>
_Implement [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) rather than `updateDom` directly on data change - so that it never prioritizes over animations (CSS etc)._

---

With our new `updateData` **hook**, we have eliminated unnecessary repeated calls to `updateDOM` and make sure we are only updating the DOM if our data has changed. However, we are still recreating the entire DOM from scratch every time - even when some of our elements will be rendered exactly the same.

To solve this problem, we can write an 'algorithm' (a series of "smart instructions"), to check what elements actually **differ** on our updated DOM as compared the the previous DOM - and only change the DOM elements that need to be updated.

So, let's write a diffing algorithm!

9. You're provided with the first half of this function `'findDiff'` - go ahead and uncomment it. As you can see, it takes in two parameters, `prevVDOM` and `currentVDOM`. Declare `'prevVDOM'` globally at the top of the file (but do not initiate it).

   - Inside of `findDiff`, we're iterating through each element of the `currentVDOM` array with a for loop.
   - Then, we are using `JSON.stringify` to check if each element of our `currentVDOM` matches the corresponding element of `prevVDOM` or if it has changed. Feel free to read the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), but don't worry too much about this method right now -- the point of using it here is to compare for equal values, not to check if two objects/arrays are referencing the same place in memory.

10. If a certain element of our `currentVDOM` has changed (when our data has updated) and does not match what is on our `prevVDOM`, `findDiff` should update (or _reconcile_) the actual `DOM` element related to that vDOM element.

    - Where have we stored the JavaScript objects we have created with hidden links that allow us to interact with their corresponding nodes on the DOM?
    - How can you make sure you **set** the correct content on each DOM element based on what's on our new/current vDOM?

Finally, we want to put our new diffing algorithm to good use! In order to implement this, we need to adjust how we update the DOM in order to avoid a full repaint of our view every time.

11. In `updateDOM` (which will be invoked every time we update our data, via our "state hook"), a couple of things need to happen:
    - If `elems` (where we store our JS objects that correspond/link to the DOM elements we create) is undefined, we need to create those elements with our vDOM, and then attach them to the DOM.
    - If we already have `elems` on the DOM, we want to reassign `prevVDOM` to be a new array, and then _spread_ (hint hint) all of the elements of our existing vDOM into it. Then, we want to update our `vDOM` with our current data, and use our **diffing** algorithm to only update the DOM data we need to.

---

Congratulations! Starting with breaking down the most granular under-the-hood operations in our UI Hard Parts journey, we have built up to understanding a groundbreaking approach to UI:

- Displayed **data/content** that our users can **interact with** (our two goals!).
- Created **single source of truth** for our data (with one-way data binding).
- Implemented "semi-visual" code with our **virtual/visual DOM** that allows us to flexibly compose our UI.
- Harnessed techniques for **efficiency** like **state hooks**, **diffing**, and **reconciliation**.
