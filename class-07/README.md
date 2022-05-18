# Express Servers

## Overview

Today we will build our own custom Express server in Node.js. We will server our front end static files and dive more deeply into the WRRC.

## Daily Plan

- Warm-up exercise
- Quick Review of previous concepts
- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
  - Repl.it <https://replit.com/@HexxKing1/301n26-Code-Challenges-Array-and-String-Methods#index.js>
- Functional programming concepts
- Express Servers
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing Class 7 of Code 301, students will be able to:

- Describe and Define:
  - Async
    - prevents our function from not stopping while it waits for a response from Axios.
  - Server
    - a device that processes a request and response from a client/server
  - ReST
    - Representaional State Transfer
    - GET = READ
    - These are a set of guidelines/rules that all APIs should abide by if you want clients on the internet to interact.
  - Express
    - Application Middleware
      - Bridge software that fills any gaps that a application has in order to run.
      - Security/vulnerabilities
        - like when you are vising your banking website and your credientails get cached and a "harmless" website can steal your credientals that way.
    - Route Middleware
      - CORS: "body guard of the internet"
  - cors
    - Body guard of the internet
  - env variables
    - dotenv
    - a file that hides your API keys from GitHub/hackers
    - make sure you add the .env to your .gitignore
  - WRRC
    - World Rock and Roll Confederation
    - Web Request Response Cycle!
- Hook up a front end React application with a back end server
- Create an Express server from scratch

## Notes

1. What is a server?

- In computing, a server is a piece of computer hardware or software that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.
  - [Wikipedia](https://en.wikipedia.org/wiki/Server_(computing))

1. What is express?

- You can use Node.js to create a simple web server using the Node HTTP package.
  - Other common web-development tasks, like GET, POST, and DELETE are not directly supported by Node itself.
  - If you want to do more than just READ, you will either need to write the code yourself, or you can use a web framework, like Express!
- Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.
  - Express is the enviroment in which we build our server in.
  - Set common web application settings like the port to use for connecting, and create custom responses for different HTTP paths.

1. What is a PORT?

- Listens on a [Port](https://en.wikipedia.org/wiki/Port_(computer_networking))
  - In computer networking, a port is a communication endpoint.
  - At the software level, within an operating system, a port is a logical construct that identifies a specific process or application.
  - A port number is always associated with the host's IP address and the type of transport protocol (HTTP method) used for communication.

1. What is cors?

- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - Cross-Origin Resource Sharing
  - "Body Guard of the Internet"
  - CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
  - CORS developed in response to browser security and vulerabilities.
    - <https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a>
  - CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred.

1. Why do we need a server?

- Servers connect applications across the internet
- Set us up to scale our application, without hammering the API.
- Provide our application a single source to fetch all of the data it needs.
- Allow a server to do the hard work of formatting data to feed our front end.
- Servers may have better/faster connections to other servers, making it more efficient than the browser doing this job.
- Secure our keys, when HTTP Referrer restrictions aren't an option

1. Basic express server:

   ```javaScript
   'use strict';

   // this library lets us access our .env file
   require('dotenv').config();

   // express is a server library
   const express = require('express');

   // initalizes the express library
   const app = express();

   // library that determines who is allowed to speak to our server
   const cors = require('cors');


   // this settting says that everyone is allowed to speak to our server
   app.use(cors());

   // we are getting the port variable from the .env file.
   const PORT = process.env.PORT;

   // this is a route. if you turn the server on and go to http://localhost:3001/ (or whatever port you specified in your .env), you will see 'hello from the home route'
   app.get('/', (request, response) => {
     response.send('hello from the home route');
   });

   // this turns the server on to the port that you specifed in your .env file
   app.listen(PORT, () => console.log(`listening on ${PORT}`));
   ```

1. You can set up a route that your front-end can hit. Your server will return information on that route:

   ```javaScript
   // FRONT-END
   await axios.get('http://localhost:3001/cats');

   // BACK-END
   app.get('/cats', (request, response) => {
     response.send('cats are the best');
   });
   ```

1. You can also send information from the front-end to the back-end as a query.

   - Queries live in the URL after the question mark: `http://localhost:3000/?city=seattle`
   - To send that query to the back-end via axios, you could write code like:

     ```javaScript
     //FRONT-END
     await axios.get('http://localhost:3001/city', {params: { city: 'seattle' }});

     // BACK-END
     app.get('city', (request, response) => {
       const city = reqeust.query.city;
       response.send(`you sent the city of ${city}`)
     });
     ```

## Feedback Overview

- Found least helpful: "The due dates for the classes not being accurate."
- "Nothing seems to be in place in the course for no reason. Just when I think "oh well X isn't that helpful" I end up referring back to it at some point either during the lab or code challenge."
- "I also notice a dramatic increase in my ability to follow along with lecture if I commit do thoroughly going over the readings prior to class."
- "trying not to stress and overthink."
- "Insight into what are most likely best practices, or at least something more professionally done to see what we'll be working toward!"
- "I can't afford a tutor right now"
- "I struggle with coding challenges"
- "working through things with partners"
