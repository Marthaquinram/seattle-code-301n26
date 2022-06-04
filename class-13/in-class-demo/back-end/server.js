'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Cat = require('./models/cat');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json()); // new

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected to Mongo Atlas!!');
});

app.get('/cats', async (request, response) => {
  // give me all the cats from the db!
  const cats = await Cat.find({});
  response.send(cats);
});

app.post('/cats', async (request, response) => {
  try {
    // if request.body has everything you need in the right shape
    // then you can pass it straight to Model
    const newCat = await Cat.create(request.body);
    // We want to send the newCat that has been created in MongoDB back to the React client so that React can save it in the state object
    // so that we go to delete or update that newCat, we have the Mongo ID to do it with.
    response.status(201).send(newCat);
  } catch(error) {
    console.error(error);
    response.status(500).send('Error when creating new cat!');
  }
})

app.delete('/cats/:id', async (request, response) => {
  try {
    await Cat.findByIdAndDelete(request.params.id);
    // Express response objects will not forward a response body if the response status code is (204) "No Content".
    response.status(204);
  } catch(error) {
    console.error(error);
    response.status(500).send('Error when deleting cat!');
  }
});

app.put('/cats/:id', async (request, response) => {
  const updatedCat = await Cat.findByIdAndUpdate(request.params.id, request.body, {overwrite: true, new: true});
  response.status(200).send(updatedCat);
})

app.listen(PORT, () => console.log('Listening on PORT', PORT));
