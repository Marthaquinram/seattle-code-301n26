'use strict';

console.log('We are connected!!');

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('submitted yall!')
}

// When the user clicks the submit button, we console.log('submitted')
document.getElementById('myForm').addEventListener('submit', handleFormSubmit);

// Every time the user types a character into the `name` text box, we update the `h2` to display `Welcome, <username>!`.
const nameHeaderElement = document.getElementById('nameHeader');
const nameElement = document.getElementById('name');

nameElement.addEventListener('input', event => {
  nameHeaderElement.innerText = `Welcome, ${event.target.value}!`;
})
