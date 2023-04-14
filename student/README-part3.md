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
   - Creating and attaching event handlers to them.
   - Displaying our new DOM elements in the view.

   In order to achieve this last step, we need to attach or `append` them to the body of the DOM. There a a couple of ways to do this, but to make sure we are replacing our nodes with an updated version when our data changes (instead of accidentally attaching multiple copies of our input or div), use [replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren).

Now, our view should look the same as it did before, but our code should consist of 3 parts - our declared variables at the top of the file, the `convert` function (where all of our functionality will be now), and `setInterval`.

---

\*\*edits to do below this line

However, our code is still fairly imperative - just glancing at it,

`Quick Refresher`: In this challenge, we are going to be using `string interpolation`, or template literals, to include `"visual"` code to our application. Imagine we wanted the text content of a div element to be the string "I live in (user's location)!". If we were to do this, we can use the `concat` method to build out our `textContent` line by line:

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
