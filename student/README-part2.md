### Part 2:

1. We should now have some content displayed on the screen that users can change, but now, how can we make our UI more sophisticated? Take a look at the JavaScript file. What if we wanted to add some placeholder text to the input box? Add the string "What's on your mind?" to the input box when the page first loads.

2. Notice that when we run up the page, the user to delete the placeholder text that is in the input box anytime they want to put in an input. Add a click handler for the input box that set the value inside the input box to an empty string when clicked. HINT: Make sure to add the event handler to the input element.

3. Now we want to restrict every change to view to be via (1) An update of 'data' and (2) A run of a single **dataToView** convertor function. To do this, lets start by creating the function **dataToView* that should do a couple of things:

    1. Update the value in our input box on the DOM to be whatever our data currently is. HINT: Our data should now start off as undefined, and if it is undefined when **dataToView** is invoked, we should populate the value in the input box to be the "What's on your mind?" string. This also means **dataToView** needs to be invoked when the page is first loaded as well.

    2. Update the text content of the <div> on the DOM to be our current data. 

4. Now that the **dataToView** function (converts our JS to be viewed on the DOM) or (makes the actual updates to the DOM), we need to change the logic in the event handlers. Instead of updating the data AND updating the DOM elements on the page in each handler, they should just be making changes to the underlying data. Remember: Changes to the data should now invoke the **dataToView** function so the view of the data is updated.

5. Instead of calling **dataToView** inside of every handler that we have, how can we listen for any data changes to auto-update the DOM? Use the setInterval function to invoke **dataToView** every 15 milliseconds.

Take a look at the setInterval documentation if you are not familiar with the method: https://developer.mozilla.org/en-US/docs/Web/API/setInterval


