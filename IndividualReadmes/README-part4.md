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