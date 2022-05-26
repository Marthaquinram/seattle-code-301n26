# Persistence

## Overview

Today we will talk about in-memory storage as well as dive deeper into modularization and refactorization.

## Daily Plan

- Warm-up exercise
- Review code challenges
- Introduce new code challege
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-Nested-For-Loops#index.js>
- Code review of lab assignment
- In-memory persistence
- Lab Overview

## Learning Objectives

As a result of completing lecture 10 of Code 301, students will:

- Describe and Define
  - In Memory Database
  - Cache
  - Cache Hit
  - Cache Miss
- Persist data in memory
- Understand the advantages and drawbacks to persisting data in memory vs using something like a database

## Notes

- In Memory Database
  - In-memory databases are purpose-built databases that rely primarily on memory for data storage, in contrast to databases that store data on disk or SSDs. In-memory data stores are designed to enable minimal response times by eliminating the need to access disks.
    - Resource: <https://medium.com/@denisanikin/what-an-in-memory-database-is-and-how-it-persists-data-efficiently-f43868cff4c1>

- Debugging steps to take when you get stuck
  - `console.log` your variables
  - use `typeof` to check the data type of a variable
  - check for misspelled variable/function names
  - look for mismatched brackets/parens
  - mixed use of single and double quotes
  - look for function calls that are passing in arguments in the wrong order
  - double check array indexing when trying to grab a specific value
  - use caution when reinitializing variables inside a loop
  - Prevent infinite loops with a valid condition that will eventually return false
  - <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging>

- Last line in `server.js` to catch any endpoint that is not defined in the server.

```js
app.use('*', notFoundHandler);

function notFoundHandler(request, response) {
  response.status(404).send('Error! Someone call the developer!');
}
```

1. What is a cache?

- it is simply an object that lives in a module in our server code.
- We are going to store new API data in the cache object for a faster look up when the same query is requested within a certain amount of time.

1. What does a cache hit mean? What does a cache miss mean?

- Cache Hit
  - the data requested is in the cache
- Cache Miss
  - the data requested is NOT in the cache
- `Date.now()` <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now>

1. What does the word `debugger` do in your code?

The `debugger;` keyword stops the execution of JavaScript, and calls (if available) the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect.

1. What is a breakpoint?

You set breakpoints wherever you want to pause debugger execution. For example, you may want to see the value of certain variables or look at the call stack at a specific breakpoint.
<https://docs.microsoft.com/en-us/visualstudio/debugger/using-breakpoints?view=vs-2022>

1. List 5 different debugging tools:

- The easiest and maybe the most common way its to simply `console.log()` the variables you want to check
- You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types.
- Setting breakpoints in the debugger window will allow you to examine values
  - [VS Code Debugger tool](https://code.visualstudio.com/docs/editor/debugging)
  - The `debugger;` keyword stops the execution of JavaScript, and calls (if available) the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect.
- eslint
- catch missing brackets or parens with the VS Code Rainbow Brackets extension.
- React extension in Chrome: <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>
- Live Share VS Code Extension for collab <https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack>

1. Adding to the cache:

  ```javaScript
    if(inMemoryDB[ingredient] !== undefined){
      // if the info is in the inMemoryDB, just use that data
      return inMemoryDB[ingredient];
    } else {
      // go the API and get the information
      // Add it to the inMemoryDB
      inMemoryDB[ingredient] = recipeArr;
    }
  ```

1. How to keep track of how old the data is: add a key with the time stamp in the constructor

  ```javaScript
  function Recipe(obj){
    // other keys
    this.dateAdded = Date.now();
  }
  ```

  - compare that date/time with however long you want to keep the data. If the data is too old, just empty the object

  ```javaScript
  if (cache[key] && (Date.now() - cache[key].dateAdded < 50000)) {
    console.log('Cache hit');
  } else {
    // dump the data and get fresh data from the API
  }
  ```
