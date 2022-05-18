import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      photos: []
    }
  }

  updateSearchQuery = (event) => {
    console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.searchQuery}`;
    console.log(url);

    const response = await axios.get(url);
    console.log(response.data);

    this.setState({ photos: response.data });
  }


  render() {
    return (
      <div className="App">
        <h1>My Photos!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="searchQuery">
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control type='text' placeholder="Enter a search term" onChange={this.updateSearchQuery} />
          </Form.Group>
        </Form>

        {this.state.photos.length && (
            this.state.photos.map((photo, idx) => (
              <div key={idx}>
                <img src={photo.img_url} alt="a cute pic of a llama" /> 
                <p>{photo.photographer}</p>
              </div>
            ))
        )}
      </div>
    );
  }
}

export default App;
