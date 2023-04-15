### Part 3: The Virtual DOM

---

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
][('div', `Hello, ${myName}!`)];
```

- Notice that in each sub-array, index `[0]` is the type of DOM element we want to create, index `[1]` has details of what we want that element to contain or display, and index `[2]` is an event handler callback function.

6. Edit the `convert` function to make sure it will properly convert each sub-array in our `vDOM` into a DOM element, accounting for the different properties on different element types, as well as setting any event handlers.

7. Declare a function `'updateDOM'`. This function will:
   - Update our `vDOM` variable to be the returned result of invoking `createDOM()`.
   - Use the `convert` function with our new `vDOM` details to update `jsInput` and `jsDiv` with a new DOM element (linked through a JS object).
   - Replace any children on the body of the DOM with our new elements.
   - Re-set the `focus` to be on the input if it has been clicked on (feel free to copy this code from the `component` function where it was given to you).

Now, all of `component`'s functionality should be replaced by the `convert` and `updateDOM` functions.

8. Since `updateDOM` is now the function that updates the DOM with our current data, make sure that it is being called regularly so any data changes will reflect on the DOM.

Now we have semi-visual coding, yay!
