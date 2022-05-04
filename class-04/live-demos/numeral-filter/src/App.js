import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

// Please do not declare global vars in React. That is what state is for.
// Usually we would store this data in a different file and then require it in.
const allNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numerals: allNums
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "even") {
      let filteredNums = allNums.filter(num => num % 2 === 0);
      this.setState({ numerals: filteredNums });
    } else if (event.target.value === "odd") {
      let filteredNums = allNums.filter(num => num % 2 === 1);
      this.setState({ numerals: filteredNums });
    } else {
      this.setState({ numerals: allNums });
    }
  }

  render() {
    return (
      <Container className="App">
        <Form>
          <Form.Control onChange={this.handleChange} as="select" >
            <option value="none">All the Nums</option>
            <option value="even">Even Nums</option>
            <option value="odd">Odd Nums</option>
          </Form.Control>
        </Form>

        <ListGroup>
          {this.state.numerals.map(num => (
            <ListGroup.Item key={num} >
              {num}
            </ListGroup.Item>
          ))}
        </ListGroup>
    </Container>
  );
}
}

export default App;
