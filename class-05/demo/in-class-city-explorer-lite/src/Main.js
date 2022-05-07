import React from 'react';
import './App.css';
import Results from './Results';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import locationData from './fake-data/location.json';
import map from './images/map.png';

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
          displayResultsSwitch: false,
          cityWeSearchedFor: "",
          locationData: locationData
      }
  }

  handleLocationSearch = (event) => {
    event.preventDefault();
    console.log("getting from the form: ", event.target.city.value);
    this.setState({ displayResultsSwitch: true, cityWeSearchedFor: event.target.city.value });
  }

  render() {
    return (
      <div className="Main">
      <Form onSubmit={this.handleLocationSearch}> 
        <Form.Group controlId='city'>
            <Form.Label>Search for a location!</Form.Label>
            <Form.Control type="text" placeholder="Enter a location here!" name="search" />
            <Button type="submit">Explore!</Button>
        </Form.Group>
      </Form>

      {this.state.displayResultsSwitch && 
      <Results 
        cityWeSearchedFor={this.state.cityWeSearchedFor} 
        locationData={this.state.locationData} 
        map={map}
       /> 
      }
    </div>
  );
}
}

export default Main;
