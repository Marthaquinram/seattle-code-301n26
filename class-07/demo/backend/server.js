'use strict';

// requires
// these are like imports, importing our libraries into our app
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { response } = require('express');

// using the express variable to instantiate a new instance of an Express server
const app = express();

// middleware
// creating an instance of CORS and telling our app to use it
// body guard of the internet
app.use(cors());

// Create your PORT variable
// the PORT variable is NOT bananas
// When we deploy to Heroku, Heroku looks for a variable named PORT to insert it's server port into.
// this is the gateway between your computer and the internet
const PORT = process.env.PORT || 3002;

// Create a route or endpoint
// GET = READ
// '/' is our "home" path or "testing" path
app.get('/', (request, response) => {
    response.send('testing, testing, is this thing on...???');
});

// Create a route for handling shopping list requests
app.get('/shoppingList', (req, res, next) => {
    try {
        // // this is the request for data the client made in the browser, via React
        // const type = req.query.type;
        // console.log('type of list requested: ', type);
        
        // // Create a new object by passing our request to the List class.
        // const listResults = new List(type);
        // console.log("List Result: ", listResults);
        
        // // Send the newly created List object in the response object.
        // res.send(listResults);

        let dataThatDoesntExist = require('./this-data-does-not-exist.js');
        response.status(200).send(dataThatDoesntExist);


    } catch (error) {
        // console just to look at the error object
        console.log(error);
        error.customMessage = 'Something went wrong in your shopping list API call...';

        // console error the custom message plus the error to get the full picture
        console.error(error.customMessage + error);
        // next can be used to pass an error to express for the error middleware to handle
        next(error);
    }
});

// this class will be used to fulfill requests for shopping list
class List {
    // static means that this variable is used by the class to create the List object and is NOT used by the List object
    // the keyword 'static' makes shoppingList a static property that is only used by the class itself, and not by the object it creates.
    // reading in the shopping list from our dummy data
    static shoppingList = require('./data/shopping-list.json');

    constructor(type) {
        // Run the request through a constructor,
        // iterate through the lists array to find a list
        // who's name matches the type we are looking for
        this.items = List.shoppingList.lists.find(listObj => listObj.listName === type).items;
    }
}

// error handling middleware
// this middleware MUST be the last app.use() 
app.use((error, request, response, next) => {
    response.status(500).send(`oops! Something went wrong: ${error.customMessage}! Call the developer! ${error.message}`);
});

// listen tells our express server which port to send data through
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
