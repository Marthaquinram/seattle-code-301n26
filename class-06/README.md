# Asynchronous Code and Third Party APIs

## Overview

Today we will explore third party APIs and how to request data from them.

## Daily Plan

- Warm-up exercise
- Quick Concept Review
- Code review of previous lab assignment
- Code review code challenges
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-Reference-vs-Value#index.js>
- Third Party APIs, `async` and `await`
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing Lecture 6 of Code 301, students will:

- Describe and Define:
  - APIs
  - Thunder Client
  - .env
  - Axios
  - async and await
  - Asynchronous Code
  - API keys
  - Queries
  - WRRC
  - Request
  - Response
- Understand third-party APIs
- Be able to gather information from APIs
- Use Thunder Client to test routes
- Understand async and await

## Notes

1. What is an API?

- Application Programming Interface
- It allows two applications to communicate with one another to access data.
- An API is essentially a messenger that takes requests, translates, and returns responses.
- The internet is full of third-party APIs who will happily give us their information as long as we ask for it in the correct way and follow their rules (ie - some require special keys, some require that we provide a link back to them... etc...). How do we know what their rules are? We have to read their documentation and every one of them is different!

1. What is asynchronous code and how does it relate to async and await?

- You don't know how long the API will take to respond, so when the script runs the next line it will throw an error because the response is not yet available.
- Instead, you need your code to wait until the response is returned before it tries to do anything else to it.
- Many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.

- async and await
  - "async and await make promises easier to write"
  - async makes a function return a Promise
  - await makes a function wait for a Promise
  - <https://www.w3schools.com/js/js_async.asp>

1. Why do you need an API key?

- An API key is a unique identifier used to authenticate a user, developer, or calling program to an API
- It is used to track number of requests made by a particular app to avoid Denial of Service attack and also for premium features. eg: only 500 calls per day for free account and to make more calls you have to subscribe to their premium account.
  - API Key is included in headers or URL of the request

1. What is Thunder Client?

- Resource: <https://www.thunderclient.io/>
- According to their docs: Hand-crafted lightweight Rest Client for Testing APIs
- alternative to Postman

1. What is axios?

- Resource: <https://axios-http.com/docs/intro>
- This is our "carrier pigeon" that carries our request to the server/API.
- According to their docs: Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
- Features: Make XMLHttpRequests from the browser; Make http requests from node.js; Supports the Promise API; Intercept request and response; Transform request and response data; Cancel requests; Automatic transforms for JSON data; Client side support for protecting against XSRF

1. Making a variable in an .env file: `PORT=3000`

   - Common ways to get that wrong:
     - Spaces around the `=`
     - Adding a semicolon at the end of the line
     - Using something other than UPPERCASE

1. Making an API call:

   ```javascript
   import React from 'react';
   import axios from 'axios';

   class App extends React.Component {
     // Because it takes an unknown amount of time to get the information, we need to do an async and await in this function:
     getPokemon = async () => {
       // This will go to the Pokemon API and GET us a bunch of pokemon objects.
       // The 'await' says: "Don't run the next line until I get back with the information that you asked for and then put it in a const called 'pokemon'."
       const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');

       // axios returns a big object. The part of that object that has the pokemon in it is the .data attribute of the object.
       const pokemonArray = pokemonResponse.data;
     }

     render() {
       return(
         <button onClick={this.getPokemon}>Get Pokemon</button>
       )
     }
   }
   ```

1. Using a try/catch for error handling:

   ```javascript
   getPokemon = async () => {
     try{
       const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
       const pokemonArray = pokemon.data;
     } catch(err) {
       console.error(err);
     }
   }
   ```

   - you can wrap a try/catch around any code you want
   - it says, "try to run this code - if it doesn't work, then run the code in the catch block"
