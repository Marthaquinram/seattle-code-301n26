# React and Forms

## Overview

Today we will cover how React handles `forms` and the asynchronous nature of setting state.

## Daily Plan

- Warm-up exercise
- Code Review lab
- Code Review code challenges
- Introduction of today's code challenge topic, `.sort()`
  - Demo in Repl.it
    - <https://replit.com/@HexxKing1/301n26-Code-Challenges-arraysort#index.js>
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing lecture 4 of Code 301, students will:

- Describe and Define:
  - Event
    - The user does something on the browser that triggers a listener.
  - Forms
    - Could be a React-Bootstrap component
    - It's a way for us to collect user input
  - Event Listeners
    - Listens for the event to happen on the element in which it's attached to.
  - Event Handlers
    - The function that fires off to handle that event.
  - event.target
    - The event object has a property called target that will target a input in your form and that target object has a property on it called value that holds the value of whatever came from that input field.
- Understand how to use a `form` in a React application
- Be able to send information collected from a form into a child component

## Notes

- What is the difference between an event listener and an event handler?
  - Event listener just listens for the event.
    - onClick; onSubmit; input; onChange
  - Event Handler is the function that does something with the value that comes from the form.

- If I am listening for an onChange on the input field, how to I access the value that the user is typing in?
  - event.target.value

- If the form is my child component, how do I send the information collected from that form up to the parent component?
  - lifting state!
  - we define a function in the parent that gets passed down to the child. The child calls that function and passes it the value(s) from the form to then be saved in state in the Parent.
