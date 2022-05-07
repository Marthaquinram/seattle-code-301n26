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

## Learning Objectives

As a result of completing lecture 5 of Code 301, students will:

- Describe and Define:
  - Conditional Rendering
  - Ternary Statements
  - Browser Router
- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

1. What is conditional rendering?

1. What is Browser Router?

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
