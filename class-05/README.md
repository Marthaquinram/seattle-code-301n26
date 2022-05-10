# Class 5: Putting it all together

## Overview

Today we will use the skills we learned over the week to build a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Daily Plan

- Warm-up exercise
- Introduction of today's code challenge topic
  - Repl.it Demo:
    - <https://replit.com/@HexxKing1/301n26-Code-Challenges-arrayreduce#index.js>
- Build City Explorer (React)
- Lab Preview
  - react-router-dom docs: <https://v5.reactrouter.com/web/guides/primary-components>
  - react-router-dom v6 docs: <https://reactrouter.com/docs/en/v6/getting-started/overview>
    - v6 not stable yet which is why there is a 2nd set of docs for it.
  - source of all react-router-dom truth: <https://github.com/remix-run/react-router>

## Learning Objectives

As a result of completing lecture 5 of Code 301, students will:

- Describe and Define:
  - Conditional Rendering
    - if this condition is met, show this thing.
  - Ternary Statements
    - short way of writing an if/else conditional
  - Browser Router
    - Its the thing on the website that allows us to switch between pages/components
- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

1. What is conditional rendering?

- <https://reactjs.org/docs/conditional-rendering.html>
- In React, conditional rendering allows us to render different elements or components based on a condition.
- Logical && Operator
  - `condition && returnIfTrue`
  - Use conditional logic to wait to display the component until after a certain condition is becomes true.
  - special to React only!
  - this operator means something different in JavaScript
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  - `condition ? returnIfTrue : returnIfFalse`
  - Ternary allows us conditionally render different parts of our applications

1. What is Browser Router?

- <https://v5.reactrouter.com/web/guides/primary-components>
  - There are three primary categories of components in React Router:
    - Routers: `<BrowserRouter>` and `<HashRouter>`
      - At the core of every React Router application should be a router component. For web projects, react-router-dom provides `<BrowserRouter>` and `<HashRouter>` routers. The main difference between the two is the way they store the URL and communicate with your web server.
        - A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.
        - To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router.
        - <https://v5.reactrouter.com/web/api/BrowserRouter>
    - Route Matchers, like `<Route>` and `<Switch>`
      - The Switch was depreicated in v6 and we no longer use it!
    - Navigation, like `<Link>`, `<NavLink>`, and `<Redirect>`

1. A ternary statement:

  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ?
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```

## Feedback Overview

- "The past week has been busy, although between seeing Danny/Hugo and the others on that team present I am very excited to see what my team and I will come up with at the end of the class."
- "Code review. Going over problems or issues with the entire class and the instructor lets me get an idea of the workflow others are using to attack their problems."
- "I struggle with technical readings. W3Schools is now my best friend"
- "My only concern is whether I can get a new tutor"
- "Bootstrap. I know it's a good thing. I know it's better than CSS. I still don't like it and understand it even less than CSS."
- Found least helpful: "sometimes the reading notes...I don't understand what I am reading"
- CODE REVIEW & DEMOS!!

## Professional Pitch Guide

- <https://docs.google.com/document/d/1CNjkvPymJ07oPZx7_cV_mQmIKtYA2xEuyQuuR4Acvkg/edit?usp=sharing>
