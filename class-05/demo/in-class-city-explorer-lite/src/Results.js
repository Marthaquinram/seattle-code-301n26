import React from 'react';
import './App.css';
import Map from "./Map";


class Results extends React.Component {
  render() {
    return (
      <div className="Results">
      <h2>The city we searched for is {this.props.cityWeSearchedFor} </h2>
      <Map locationData={this.props.locationData} map={this.props.map} />
    </div>
  );
}
}

export default Results;
