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
