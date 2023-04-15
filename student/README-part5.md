## Part 5: Hooks & Diffing: How we can give our elements additional functionality. 

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
