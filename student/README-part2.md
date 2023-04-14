### Part 2: One-way Data Binding 

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

5. Now that the `dataToView` function either converts our JS to be viewed on the DOM or makes the actual updates to the DOM, we need to adjust our event handlers. Instead of updating the data AND updating the DOM elements on the page in each handler, they should only make changes to the underlying data. Remember: Changes to the data should invoke the `dataToView` function so the `view` is always up to date.

6. While it may not be efficient, we can have our `dataToView` run so often that nay change to data will instantly propagate using a [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) function at a rate that is close to the browser refresh rate. Use `setInterval` to implement this. 
