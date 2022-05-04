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
  - Forms
  - Event Listeners
  - Event Handlers
  - event.target
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
