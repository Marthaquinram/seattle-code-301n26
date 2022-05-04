import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "User"
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submitted yall!");
  };

  handleUserNameInput = (e) => {
    e.preventDefault();
    this.setState({ userName: e.target.value});
  }

  render() {
    return (
      <div className="App">
      <h1>This is your friendly form demo!</h1>
      <h2>Welcome {this.state.userName}! </h2>

      <form onSubmit={this.handleFormSubmit} >
        <label htmlFor="name" >Name</label>
        <input name="name" type="text" />
        <br />
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" />
        <br />
        <input type="submit" />
      </form>
        <br />

      <Container>
        <Form>
          <Form.Group controlId='bootstrapName' >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onInput={this.handleUserNameInput} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
}

export default App;
