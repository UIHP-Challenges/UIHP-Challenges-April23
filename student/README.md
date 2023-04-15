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

Now what? Even if we can change the data on the DOM, we can't do anything with that data or access it directly. We would still need some kind of logic to make something happen in the event that a user types in our input or a button is clicked. Our `html` is only being loaded once and we can't run any code in the DOM. Therefore, we need JavaScript to create, save, and update data.

5. Uncomment the `<script>` tag in `index.html`. This script acts as a link between the `html` and the code in the linked JavaScript file. When our `script` loads with our HTML in the browser, the JavaScript engine will start running and allow us to run our JS code in the browser directly (and access everything else we get with the JS runtime, including `memory` to store data).

        **Extension Challenge: Document Object** 
        - In our JavaScript runtime, we have access to some very useful APIs, including [document](https://developer.mozilla.org/en-US/docs/Web/API/Document). In `part1.js`, if you `console.log(document)`, you will see an object in the browser dev tools console. This `document` object also has a hidden property that acts as a link to the DOM.

6. In `part1.js`, declare a variable `post` and initialize it to a string that is your name. Congrats - we have data! Now, how can we use it to update the DOM and what we see in our view?

If you're unfamiliar with DOM manipulation, take a look at the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) on MDN, and particularly the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method (another hidden property on the `document` object!), which allows us to query the DOM to select a specific DOM element and create an object in our JavaScript memory with a hidden "link" to access it. That object will have "property-methods" to get or set the data on that DOM element.

7. Query the DOM to select the `input` node on the DOM and assign the resulting JS object to a variable called `jsInput`. Now do the same for the the `div` node on the DOM and assign the resulting JS object to a variable called `jsDiv`.

8. Let's use our JS data to update the DOM data. Our `jsDiv` object will have some "getter/setter" property-methods, including [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent). Set the `jsDiv.textContent` to be the value of our `post` variable. Refresh the page in the browser, and you should see that string as the text in the `div`.

9. Now let's update our JavaScript data based on our user interactions. First, edit your variable declaration for `post` at the top of the file to initialize it to an empty string instead.

   Declare a function `handleInput` that will "handle" what we want to do with what the user types in the input. Use the `value` getter/setter method available on our `jsInput` object. When the user types into the `input`, reassign `post` to hold that text.

   Set the `textContent` on the `div` to to be the value of `post` here in `handleInput` instead.

10. Finally, let's create an `event handler` that will run our `handleInput` function in the event that a user types in `input`. There are several ways to do this, but one is the [`oninput`](https://www.w3schools.com/jsref/event_oninput.asp) property on the `jsInput` object. Us this to set `handleInput` on our input DOM element as a callback.

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
   - Creating and attaching event handlers to them.
   - Displaying our new DOM elements in the view.

   In order to achieve this last step, we need to attach or `append` them to the body of the DOM. There a a couple of ways to do this, but to make sure we are replacing our nodes with an updated version when our data changes (instead of accidentally attaching multiple copies of our input or div), use [replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren).

Now, our view should look the same as it did before, but our code should consist of 3 parts - our declared variables at the top of the file, the `convert` function (where all of our functionality will be now), and `setInterval`.

---

\*\*edits to do below this line

However, our code is still fairly imperative - just glancing at it,

something about making our code more visual yet still dynamic/flexible

As an example, let's take a look at `string interpolation`, using template literals. Imagine we wanted the text content of a div element to be the string "I live in (user's location)!". One way we can do this is to use the `concat` method to build out our `textContent` line by line:

```javascript
let userLocation = 'LA';

let textToDisplay = 'I live in ';
textToDisplay = textToDisplay.concat(userLocation);
textToDisplay = textToDisplay.concat('!');
```

Remember, the closer we get our code to mirror what it's actual visual/graphic output looks like, the easier it is for us as developers. So, to make this code look more `"visual"`, we can use a template literal with backticks:

```javascript
textToDisplay = `I live in ${userLocation}!`;
```

As we can see, this looks a lot more semantic. Now, we can something similar here creating visual elements.

Now, we should be able to see our component on the screen! We will now shift over to making our Virtual DOM in JavaScript. To do this, we are going to have to tweak our code a bit. Now, let's start by declaring the global variable `vDOM` that we will be building out later, and our `createVDOM` function. `createVDOM` is going to be returning an array with all of the details of our elements, which themselves will be arrays. We will have two arrays:

4. The first array in the returned array from `createVDOM` will have 3 elements, `"input"`, `userName`, and a function `handle` that assigns `userName` to the value of `jsInput` (`handle` in this case replaces the `handleInput` event handler). This array will contain the details for `jsInput` down the line.

5. The second array is only going to have 2 elements, `"div"` and the template literal `Hello, ${userName}!`. This will of course be the details for `jsDiv`.

6. We are now going to want to create a function that converts our pieces of `view` in the virtual DOM to elements. Declare a function `convert` that has one parameter, `node`(array of details). `convert` should:

7. Declare a constant `element` that is initialized to a new element by passing the first element) in `node` as an argument to `createElement`.

8. Assign both the `textContent` and `value` properties on `element` to be the second element in `node`.

9. Assign the `oninput` property on `element` to be the third element in `node`.

10. Finally, return `element`.

11. At this point, we have a function that returns an array details for our elements, `createVDOM`, and a function that converts those details into actual elements, `convert`. So, now we just need a function that actually updates.

Declare the function `updateDOM` that will now act as our convertor. `updateDOM` will: (\*make sure updateDOM has focus code instead now)

9. Update our `vDOM` variable to be the returned result of invoking `createDOM()`. `vDOM` will now contain the details we need to make our elements.

10. Update `jsInput` to be the returned result of the invoking `convert`, passing the first element in `vDOM`(details array for input element) as an argument.

11. Update `jsDiv` to be the returned result of invoking `convert`, passing the second element in `vDOM`(details array for div element) as an argument.

12. We now have our elements created, but we need to append them to the dom using `replaceChildren`, passing in `jsInput` and `jsDiv` as arguments on the `body` property on the `document` object.

13. The final change we need to make is with out `setInterval` method. Since `updateDOM` is now the function that updates the DOM, that is the function that needs to be passed into `setInterval`.

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

- - -

## Part 5: Hooks & Diffing

Now that we've learned to build a declarative UI using semi-visual coding and we've also created 'element-flexible' code to 'compose' our logic, let's augment our VDOM elements to include additional functionality. 

1. In `index.html`, edit the `script` tag to use `part5.js` as the `src` file.

We love the virtual DOM for semi-visual coding, but it's not very efficient. We need some improvements. It's great that we are able to update `myName` -- but how can we make this code better? Currently, we're rendering our functions every 15ms - CSS animations, smooth scrolling, and even user action handlers are at risk or can be blocked. 

We can run on data change, but now our VDOM isn't "real" -- it's only rendered as though we've run the `updateDOM` function upon every data change, which is unlikely. 

So, let's introduce a "state hook". Instead of directly updating `myName`, we can create a function to do so by implementing some logic and calling our `updateDOM`.

3. First, let's get rid of the `setInterval` function to avoid repeated calls to our function. 

4. Initialize a function `updateName` which takes in `value`. 

5. Reassign `myName` to this passed-in `value`. Don't forget to also invoke `updateDOM`. 

As long as we restrict ourselves from ever changing data directly and only doing so by using the `updateName` function, then we're fine. Perhaps we can lock down `myName` so that we it cannot be accessed directly. Better yet, perhaps we can refactor our function so that it works for any piece of data in our app - then we can just "hook" into it. 

6. We can start by wrapping ```myName = ''``` in brackets to place it inside of an object. Then, rename the property `myName` to `name` to make it more applicable to anything.

7. Let's assign this object to a variable `data` so that it's clear that it can hold any piece of information that we would like to add or update in our app. 

8. Rename the `updateName` function to something more semantic, such as `updateData`. Have it take in a `label` in addition to `value`.

8. Now, we can store our `label` in the `data` object and assign it the value of the passed-in `value` so that we can specify what is being updated, and what that something is being updated with. 

9. Since we just have implemented changes to the logic in our `updateData` function, we should probably also make some adjustments to our `createVDOM` function. Instead of passing in `myName`, how can we pass in the `myName` property on the `data` object? 

10. Instead of defining and invoking the `handle` function inside of `createVDOM`, what function might we pass in now that we have created logic for (**hint**) updating data?

11. Lastly, rather than passing in `myName` into the string literal in the `createVDOM` function, what could we pass in instead based on the previous steps?

**Extension Challenge: requestAnimationFrame** 
    - We can switch to running `requestAnimationFrame` rather than `updateDom` directly on data change - so that it never prioritizes over animations (CSS etc). (Add directions here). 

How can we refactor our code make it more efficient but still allow for automatic updates upon changes made to the data? We can write an 'algorithm', or a series of smart instructures, to check what elements actually **differ** - and only change the DOM elements that need to be updated. 

So, let's write a diffing algorithm! You're provided with the first half of this function `findDiff`. As you can see, it takes in two parameters - `prevDOM` and `currentVDOM`. Inside of our `findDiff` function, we're looping through the `currentVDOM` array. Then, we are using `JSON.stringify` to convert values to JSON strings. Feel free to read the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) but don't worry too much about this method right now -- the point of using it here is to compare for equal values -- not to check if two objects/arrays are pointing to the same object in memory. 

14. Inside of the conditional statement, we want to change the DOM element related to the respective vDOM elements. We can do this by grabbing the `elems` (which we have updated in the `document.body` inside of our call to the `replaceChildren` method `updateDOM`) at the current index (`i`) and updating the `textContent` and `value` fields of these elements with the `currentVDOM` at the current index(`i`). What happens when you `console.log(currentVDOM[i])? Is there a specific value you need to grab? 

15. Let's also implement some logic for differentating between the `prevVDOM` and `vDOM`. Declare a variable prevDom at the top of the file. 

16. Inside of your `updateDOM` function, assign the value of `prevVDOM` to an array with the `vDOM` elements *spread* into the array. Then, check to see if `elems` is *strictly equal to* `undefined`. If it is, move your `elems = vDOM.map(convert) line inside of the conditional. Otherwise (else), we can invoke our `findDiff` function with `prevVDOM` and `vDOM` passed in. 

17. Finally, let's call our `updateDOM` function with `setInterval` again. (Include explanation as to why we do this). 

- - - 

Include some kind of final summary to wrap things up at the end of this section here. 

Notes: on slide 43, vDOM is initalized to the value of createVDOM(). Is this necessary? It's assigned to the same value inside of `updateDOM`. Also - typo on slide 43 - should be replaceChildren instead of append
