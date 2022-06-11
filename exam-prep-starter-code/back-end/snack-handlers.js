const SnackHandlers = {};
const SnackModel = require('./snack-model')

SnackHandlers.create = async (request, response) => {
  console.log('creating a snack...');
  response.status(200).json('creating a snack...');
}

SnackHandlers.getAll = async (request, response) => {
  console.log('getting all the snacks...');
  response.status(200).json('getting all the snacks...');
}

SnackHandlers.getOne = async (request, response) => {
  console.log('getting a single snack...');
  response.send('getting a single snack...');
}


SnackHandlers.update = async (request, response) => {
  console.log('updating a snack...');
  response.send(snack);
}

SnackHandlers.delete = async (request, response) => {
  console.log('deleting a snack...');
  response.status(200).send('snack deleted');
}


module.exports = SnackHandlers;
