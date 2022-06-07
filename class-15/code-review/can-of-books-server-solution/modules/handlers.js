// LAB 12 - FEATURED TASKS
// Grab the properties of the book to be created from the request object. Create an object-literal representation of a Book with these book properties. Verify the server is doing this correctly with your REST Client.
// Add your new book object to the database. Respond to the request with a JSON representation of the newly-saved book. With your REST Client, verify that this is working.
// Verify that you can access the book id from the `request.params` object.
// Use the id of the book to delete that book from the database.
// If all goes well, send back a success response. Handle any errors with proper error messages and response status codes.

'use strict';

const Book = require('../models/book');

// refactored from lab11 to include POST and DELETE handlers
const Handler = {};

// lab 11
Handler.getBooks = async (request, response, next) => {
  try {
    const books = await Book.find({});
    response.status(200).send(books);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);

  } catch (error) {
    error.customMessage = 'Something went wrong when reading your books: ';
    console.error(error.customMessage + error);

    // next can be used to pass an error to express for the error middleware to handle
    next(error);

    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
};

// lab 12
Handler.createBook = async (request, response, next) => {
  try {
    const book = await Book.create(request.body);
    // 201 status indicates that the request has succeeded and has led to the creation of a resource.
    response.status(201).send(book);

  } catch (error) {
    error.customMessage = 'Something went wrong when creating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

// lab 12
Handler.deleteBook = async (request, response, next) => {
  try {
    console.log('Book ID to be deleted: ', request.params.id);
    await Book.findByIdAndDelete(request.params.id);
    // Express response objects will not forward a response body if the response status code is (204) "No Content".
    response.status(204);

  } catch (error) {
    error.customMessage = 'Something went wrong when deleting your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

// lab 13
Handler.updateBook = async (request, response, next) => {
  try {
    console.log('Book Body to be updated: ', request.body);
    // Model.findByIdAndUpdate(id, updatedData, options)
    const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updatedBook);

  } catch (error) {
    error.customMessage = 'Something went wrong when updating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};


module.exports = Handler;