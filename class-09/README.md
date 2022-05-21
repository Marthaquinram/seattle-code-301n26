# Advanced Topics

## Overview

Today we will dive a little bit deeper into Express and higher level programming in general, covering the following topics:

- Strategies for Refactoring
- Functional Programming
- Modularization

## Daily Plan

- Review code challenges
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-Object-Iteration#index.js>
- Feedback Overview
- Warm-up exercise
- Review previous concepts
- Code review of lab assignment
- Promises vs Async
- Refactoring
- Refactoring with Promises
- Modules
- Lab Preview

## Learning Objectives

Students will be able to:

- Describe and Define
  - Substandard programming patterns
  - Refactoring opportunities
  - Efficiency Loss/Gain
  - Modularization
  - Single Responsibility Principle (SRP)
- Execute
  - Refactor monolithic functions into smaller, single responsibility functions
  - Create a "controller" function
  - Create DRY code by finding repetition, patterns
  - Modularize similar code

## Notes

1. What is a Promise?

1. `async and await` - vs - `.then() and .catch()`

1. What is the difference between a Promise and using `.then()/.catch()`?

1. What is DRY code?

1. Why do we modularize our code?

  ```javaScript
  async function doSomething() {
    try{
      const results = await axios.get(url)
    }
    catch(err){
      console.error(err);
    }
  }

  // error handeling is built in with the .catch() so we don't need a try/catch
  function doSomething() {
    axios
      .get(url)
      .then(results => {
        // the results only exist within this code block
      })
      .catch(err => console.error(err))
  }
  ```

1. Modularizing a file on the server

  ```javaScript
  function doSomething(){
    // does something really cool
  }

  module.exports = doSomething
  ```

  - OR, it can be writen like this

  ```javaScript
  module.exports = () => {
    // does something really cool
  }
  ```

  - in the server file

  ```javaScript
  const doSomething = require('./path-to-doSomething');
  // the rest of the file
  ```

1. We can also export more than one function by putting it in an object

  ```javaScript
  module.exports = {
    doSomething: function(){
      // does something cool
    },

    doSomethingElse: function(){
      // does something else
    }
  }
  ```

  - to access a function from the object above in the server, we would...

  ```javaScript
  const doesStuffObject = require('./path-to-doesStuffObject');

  doesStuffObject.doSomething();
  doesStuffObject.doSomethingElse();
  ```

## Feedback Overview

- "My only feedback would be more lab time considering the scope of the assignment (especially with Lab 08). We had limited lab time this week with longer lectures"
- "I think the Trello board could include some additional small hints at certain places that could spark solutions."
- "Still behind and I keep feeling like I am barely treading water, yet I am understanding more and coming to realize how much I have already learned."
- "System errors, knowing that they happen all the time, I have come to accept them as as par for the course. Now I will simply become a pro on debugging.  Always a silver lining. "
- "How do we go about leaving notes on someone's GitHub for code review?"
- "The partner power hours seem to be simply a person talking about their life story for an hour a majority of the time. While it can be interesting, it's not usually all that enlightening outside of the usual "network more and also keep going". Hearing David Souther's talk about spaceX cloud infrastructure, even if it was beyond my understanding, was much more worthwhile to me than these motivational talks."
- "my brain is fried right now, I cant think of anything at the moment, but Im excited to be learning so many new stuff."
- "working in teams...Im constantly learning from them!"
- "I found working as a team very helpful."
- "I liked how we are starting to work with partners, even just for the beginning of the lab. It's nice to see how others see things and write code, I of course use that to my advantage and take some pointers."
- "I think another thing that may help is just challenging us students more in lecture? Kind of put us on the spot, I think that would help when learning new concepts and ideas."
