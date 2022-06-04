import React from 'react';
// import Cats from './Cats';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Filter by location</h2>
        <form onSubmit={this.props.handleLocationSubmit}>
          <input name="location" />
          <button>ok</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;