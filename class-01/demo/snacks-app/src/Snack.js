import React from 'react';

class Snack extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>{this.props.bananas}</p>
      </>
    )
  }
}

export default Snack;
