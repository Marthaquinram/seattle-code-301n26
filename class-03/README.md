# Passing Functions as Props

## Overview

Yesterday, you learned how to pass information from a parent component into a child component through `props`. Today, we are going to pass functions through the `props` as well. We are also going to display a nested component using `.map` rather than hard-coding each one individually.

## Daily Plan

- Weekly Feedback Overview
  - "My only real feedback is for the sheer amount of prework. Not that I mind doing it, but it was a short turn around/pressure to get things rolling when there is only a week between 201 ending and 301 beginning."
  - "There were some real difficulties on my end getting the software development environment properly set up."
  - Found least helpful: "Reading assignments"
- Warm-up exercise
- Concept Review of class 02
- Code review of lab02 assignment
- Code Review of code challenges 02
- Quick review code challenges 03
  - Demo in Repl.it:
    - <https://replit.com/@HexxKing1/301n26-Code-Challenges-arraymap-and-arrayfilter#index.js>
- Lab Demo
- Lab Preview

## Learning Objectives

As a result of completing Lecture 3 of Code 301, students will:

- Describe and Define:
  - Parent Component
  - Child Component
  - Spread Operator
- Be able to pass functions from a parent component to a child component
- Understand the spread opperator
- Understand `.map` and how to use it to render data in a React application

## Notes

- How can a child component update the state of a parent component?
  - This "helper function" allows us to do something in a child component that will trigger behavior in the parent component.
  - This is useful for updating state, which in return re-renders the parent component and all of it's the children components with the updated value(s). The action of changing state still occurs in the parent, even if the child triggers it and passes arguments.

- How does a parent component send a function into a child component?
  - The parent component sends a "helper function" into the child component on the props that will allow the child component to interact with information in the parent component by invoking that "helper function".
  - This is called "lifting state" in React.

- Using React-Bootstrap, how do you determine if a modal is open or closed?
  - You can use the show and onHide props on the Modal element to display or hide the modal.
    - The `show` attribute is a boolean and will show if it is set to `true` or will hide if set to `false`.
    - The `onHide` attribute is an event listener that closes the model by setting the `show` property to `false`.

- Allowing the child component to update the state in the parent component:
  - Step 1. send a function into the child component that updates the state in the parent component
  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'bob'
      }
    }

    updateName = (newName) => this.setState({ name: newName });

    render(){
      return(
        <Child updateName={this.updateName}>
      )
    }
  }
  ```

  - Step 2. invoke that function from the props in the child component
  ```javaScript
  class Child extends React.Component {
    constructor(props){
      super(props);
      this.state={
        newName:''
      }
    }

    // this function calls the function that the parent component send us with the new name as an argument
    updateChildName = () => this.props.updateName(this.state.newName);

    render(){
      return(
        <>
          <form onSubmit={this.updateChildName}>
            <label>What is your new name?</label>
            <input onChange={() => this.setState({ newName: e.target.value })} />
          </form>
        </>
      )
    }
  }
  ```

  - Step 3. The invoked function from the child component will update the name in the parent component and tada! Your child component has essientially changed the state of your parent component.
