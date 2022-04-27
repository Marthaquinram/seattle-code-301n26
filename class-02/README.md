# State and Props

## Overview

Today's class will focus on passing information as `props` from a parent component into a child component. We will also cover the concept of `state` and how individual components can hold state.

## Daily Plan

- Warm-up exercise
- Quick review class 01 concepts
- Code review of lab assignment
- Review code challenges
- Introduction of today's code challenge topic(s)
  - Demo in Repl.it:
    - <https://replit.com/@HexxKing1/301n26-Code-Challenges-arraymap-and-arrayfilter#index.js>
- Code Demo
- Bootstrap
- Netlify
- Lab Preview

## Learning Objectives

As a result of completing Lecture 2 of Code 301, students will be able to:

- Describe and Define:
  - State
  - Props
  - React-Bootstrap
  - Netlify
  - setState
- Execute
  - Understand and define the concepts of `props` and `state` as they relate to React Components
  - Pass both static and dynamic information from a parent component into a child component using `props`
  - Hold information as `state` in different components
  - Create responsive web pages suitable for desktop or mobile web browsers
  - Integrate a 3rd party component library into a React application
  - Deploy to Netlify

## Notes

- What is state?
  - The state is a built-in React object that is used to hold data about the component. A component's state can change, and when it changes, the whole component re-renders and therefore re-renders any child component with the newly updated data as well.
- What are props?
  - Props is a special kind of object in React that allows us to pass data from a parent component to a child component(s). Props is short for "properties". They are useful when you want the flow of data in your app to be dynamic.

1. To Update State: `this.setState({ thingInState: thingToUpdate })`

1. To send something in props to a child component:
`<ChildComponent bananas='randomString' />`

1. To access that variable in the props from the child component: `this.props.bananas`

1. Information flows in one direction. That direciton is down.

- What is Bootstrap?
  - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.(Wikipedia)

- dynamic is the ability to update a value in an application and that new value is automatically updated everywhere it is needed.

- responsive just means that your UI can be displayed on any size screen like a phone vs a tablet vs a computer screen (and it still look nice).

- What are different things that I can customize using Bootstrap?
  - forms
  - modals
  - buttons
  - images
  - tables

- in React, we must use `className` instead of `class` when needing a CSS selector. `class` is a reserved word that created instances of objects in JavaScript.

- How does Bootstrap use classes for customization?
  - <https://getbootstrap.com/docs/5.0/utilities/api/>

1. Holding state in a parent component and sending it into a child component:

  ```javaScript
  import React from 'react';
  import Child from './path-to-Child-component';

  class Parent extends React.Component {
    constructor(props);
    this.state={
      name: 'sue',
      childName: 'bob'
    }

    render() {
      return (
        <>
          <p>My name is {this.state.name}</p>
          <Child kidsName={this.state.childName}>
        </>
      )
    }
  }

  export default Parent

  import React from 'react';

  class Child extends React.Component {
    render() {
      return(
        <p>My name is {this.props.kidsName}</p>
      )
    }
  }

  export default Child
  ```

## Portfolio Prep Resources

- Example of the Portfolio Prep assignment
  - <https://github.com/HexxKing/portfolioPrep>

- Canva Tool for Creating Banners and such...
  - <https://www.canva.com/>
