import axios from "axios";
import React from "react";
import "./App.css";
import Snacks from './Snacks';
import SnackForm from './SnackForm';

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    }
  }

  componentDidMount() {
    this.getSnacks();
  }

  getSnacks = async () => {
    try {
      console.log('getting snacks...');
    } catch(error) {
      console.error(error);
    }
  }

  createSnack = async (snackInfo) => {
    try {
      console.log('creating a snack...');
    } catch(error) {
      console.error(error);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.snackName.value);
    const snackInfo = {
      name: event.target.snackName.value,
      description: event.target.snackDescription.value
    };
    this.createSnack(snackInfo);
    this.getSnacks();
  }

  deleteSnack = async (id) => {
    try {
      console.log('deleting a snack...');
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <SnackForm />
        <Snacks />
      </div>
    );
  }
}

export default App;
