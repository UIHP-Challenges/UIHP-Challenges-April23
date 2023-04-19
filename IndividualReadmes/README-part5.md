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

With our new `updateData` **hook**, we have eliminated unnecessary repeated calls to `updateDOM` and make sure we are only updating the DOM if our data has changed. However, we are still recreating the entire DOM from scratch every time - even when some of our elements will be redered exactly the same.

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

Congratulations! Starting with breaking down the most granualar under the hood operations in our UI Hard Parts Journey, we have built up to understanding a groundbreaking approach to UI:

- Displayed **data/content** that our users can **interact with to change** (our two goals!).
- A **single source of truth** for our data (with one-way data binding).
- "Semi-visual" code with our **virtual/visual DOM** that allows us to flexibly compose our UI.
- Techniques for **efficiency** like **state hooks**, **diffing**, and **reconciliation**.
