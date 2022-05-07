import React from 'react';
import './App.css';

class Map extends React.Component {
  render() {
    return (
      <div className="Map">
      <h2>Map of {this.props.locationData.formatted_query}</h2>
      {this.props.locationData && <img src={this.props.map} alt="here my alt..." />}
    </div>
  );
}
}

export default Map;
