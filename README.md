# The Hard Parts of UI Development - Challenges

## Summary
The purpose of these challenges is to understand server fundamentals in vanilla Node.js under the hood - notably the request and response object. We will be learning how to deal with events, streams and constructing the request body. Later on, the popular framework Express will abstract these concepts, but we want to learn their fundamental workings in this unit.

![alt text](https://gregorybeamer.files.wordpress.com/2009/12/request_response5b35d.png)

Clients (browsers, mobile devices, and more) send requests to servers. The server's responsibility is to interpret the request and then respond with the the appropriate information. For example, the client might request the most recent 20 tweets from all of its friends. The server would process the request in the following order:

 - Find the user requesting the tweets
 - Find the friends of that user
 - Find their most recent tweets
 - Sort the tweets
 - Give the client what was requested via the response object

All of this information can be gathered based on the information in the request object. If, however, the server is unable to provide the data the client requested, then the response object is returned with information about the error. The most common error the response object provides is the 404 error:
![alt text](http://www.404errorpages.com/images/image003.png)

## How do I get started?

1. Install dependencies.

````
npm install
````

2. A node http ‘server’ has been started for you in the `server.js` file. A GET request from the user’s browser is usually designed to get content/data from a server. Add code to have the server serve a message “Welcome to Twitter” back to the client (the user). In this question, ignore the conditional logic for now

For this exercise, do not use Express or any other Node framework. Run your server with the following command:

````
node server.js
````

or `npm start`  

Then visit `http://localhost:3000/`. To exit the server, press `ctrl+C`.
 **Note: Whenever you make changes to your server, you will need to restart your server by exiting your server then opening it again.** 
 
(optional) Alternatively, Nodemon is a utility that will automatically restart your server whenever you save changes to a file. Install nodemon by running ```npm install --save-dev nodemon``` and then run your server using the following command: ```nodemon server.js```. Servers running with nodemon do not need to be restarted when changes are made to the source code.

3. Now we are going to investigate the Node auto-inserted object into the callback function. It represents the request from the user. 

Write logic in the conditional to send the `index.html` page on a GET request to the url `/` by introspecting the request object. Look up the `fs.readFileSync` function. (Note that in future sections we will be using the asynchronous and non-blocking `fs.readFile` rather than the synchronous and blocking `fs.readFileSync`.) 

5. When you successfully serve the index.html page, have your server respond to a POST request to the url `/sayHi` with the text `hi back to you!`. (Notice how we've set up the POST request functionality for you in index.html: what happens when we click the button "Say Hi"? Check the browser console.)

6. A POST request is usually designed to store data on a server. Modify your code for the POST request to `/sayHi` so that the server adds the text `Somebody said hi.\n` to a file named `hi_log.txt`. Look up the `fs.appendFileSync` to complete this task. (Note: ```fs.appendFileSync``` has an asynchronous counterpart called ```fs.appendFile``` which we will be using in future units). After the file operation have the server respond with the string `hi back to you!` Now happens when we click the button "Say Hi"?

7. A POST request is usually accompanied by a request body. The body is a string that usually represents the data we want to store. The request body can sometimes be very long depending on the volume of data that needs to be stored. Thus, the request body comes to the server in "chunks" at a time. These "chunks" flow from the client to the server in what we call a "stream."
Have your server respond to a POST request to `/greeting`. One of the buttons in index.html makes a POST to `/greeting` with the body `hello`, and the another makes a POST to `/greeting` with the body `what's up` (which buttons are these? Check index.html). If the request body is `hello`, then respond with `hello there!`. If the request body is `what's up`, then respond with `the sky`. Otherwise, respond with `good morning`.
To accumulate the request body chunks that come to the server, define two event handlers for the request: on `data`, and on `end`. The `data` event handler fires when we receive a chunk of the request body. When the `end` event handler fires, we need to combine these chunks together into a final request body string. Depending on that string, make the appropriate response from the server.

8. Have the POST request to the route `/greeting` store the request body in the file `hi_log.txt`.

9. On a typical website, making a request to a url that the server cannot find will display a 404: not found page. In general, you want to respond to any request that cannot be found with a 404 message. Currently, our site hangs and eventually times out if we make a request to e.g. `http://localhost:3000/nonexistent` (try it!). Thus, if the server cannot find the url, set the response header code to 404 and send back the message `Error: Not Found`.

10. Our web page currently has no styling. Go to the `index.html` file and uncomment out the link to the stylesheet. Now restart the server, and go look at our web page. We still don't have any styling on our page! If we check the console it suggests that the request to `/style.css` is giving a 404 not found error. Have your server respond to GET requests for `/style.css` so that the page is styled. Where is this `/style.css` route being requested?

11. Download [Postman](https://www.getpostman.com/). Postman allows you to directly make GET, POST, and other requests to a server by typing into a URL bar. Note that directly typing into the web browser URL bar only allows making GET requests. Test your server's GET and POST requests to the routes you defined earlier using Postman. To do this, go to Postman and
    1. Make a GET request to `http://localhost:3000/`. What do we expect to see in the response?
    2. Make a POST request to `http://localhost:3000/sayHi`. What do we expect to see in the response? Does `hi_log.txt` also change?
    3. Make a POST request to `http://localhost:3000/greeting`. Define the request body in Postman. To do this, click on the "Body" tab(below the URL bar), click on "raw", click on "JSON", then type in the request body text as a JSON object.
    4. Make a GET request to `http://localhost:3000/nonexistent`. What do we expect to see in the response?

## How do I test if my answer is correct?

Start your node server and visit `http://localhost:3000/` to test out whether you have successfully responded to the user request

## Extension Work

### Expanding on CRUD:

The acronym `CRUD` (Create, Read, Update, Delete) refers to the four major functions implemented in persistent data applications (this will become more clear when we start working with databases). Although there are many different types of request methods to choose from (see the request method drop down in Postman for varying options), there are four key request methods that complement CRUD functionality. Lucky for you, you've already used two of them! `POST` is the request method used to `Create` new data in storage. `GET` is the method used to `Read` existing data. `PUT` is the method to `Update` existing data, and lastly `DELETE` is the method used to `Delete` existing data. Let's try implementing `PUT` and `DELETE`.

1. Add a button to `index.html` that makes a PUT request (you can choose the url). Send the string `updated message`. Have the server, upon receiving this request, replace the contents of `hi_log.txt` with the updated message.

2. Add a button to `index.html` that makes a DELETE request (you can choose the url). Have the server, upon receiving this request, delete the `hi_log.txt` file.

### Templating Engines:

1. Set up a templating engine so you can write your pages in a templating language. If you don't know which one to pick some great ones are
    1. [markdown](http://daringfireball.net/projects/markdown/)
    2. [pug](https://pugjs.org/) (formerly `jade`)

### Streams:
#### Take a look at the file created for you in `streams/streams.js`. This can be run using `npm run streams`.
1. [Readable streams](https://nodejs.org/api/stream.html#stream_readable_streams)
    - [ ] Create a readable stream to import the file `on-joy-and-sorrow-emoji.txt`
    - [ ] On the 'data' event, console.log the data received (what do you notice?)
    - [ ] How can we decode this data so it shows up in the console?
    - [ ] Update our console logs so ':)' is replaced with 'joy' and ':(' is replaced with 'sorrow'
2. [Writable streams](https://nodejs.org/api/stream.html#stream_writable_streams)
   - [ ] Create a writable stream exporting to `on-joy-and-sorrow-fixed.txt`
   - [ ] Pipe the readable stream to the writable stream
3. [Transform streams](https://nodejs.org/api/stream.html#stream_duplex_and_transform_streams) implement a readable and writable interface for modifying input from readable streams
   - [ ] Create a transform stream to modify incoming data, replacing ':)' with 'joy' and ':(' with 'sorrow'.  
   **NOTE**: The [through2](https://www.npmjs.com/package/through2) library is a useful abstraction for this (it's already been imported for you)
   - [ ] Pipe the readable stream to the transform stream you just created, and then pipe the result to the writable stream
