'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getJobs = require('./modules/jobs');
const notFound = require('./modules/notFound');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/jobs', getJobs);
// '*' in programming is called a wildcard and it selects "everything"
// this endpoint says if you arrive at any other endpoint besides one that we have already defined ^^^ then run the notFound function
app.use('*', notFound);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
