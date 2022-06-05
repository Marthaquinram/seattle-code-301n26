import React from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SearchForm from './SearchForm';
import Cats from './Cats';

const SERVER = process.env.REACT_APP_SERVER;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats() {
    let apiUrl = `${SERVER}/cats`;
    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  // We will come back to this functionality in class 15 when we talk about auth
  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    // this.fetchCats(location);
  }

  updateCatsArray = (newCatResponseData) => {
    this.setState({
      cats: [...this.state.cats, newCatResponseData]
    })
  }

  updateFilteredCats = (filteredCats) => {
    this.setState({
      cats: filteredCats
    })
  }


  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/cats">Cats</Link>
          </nav>
          <Routes>
            <Route
              exact path="/"
              element={<SearchForm 
                handleLocationSubmit={this.handleLocationSubmit}
                />}
            >
            </Route>
            <Route
              path="/cats"
              element={
              <Cats 
                cats={this.state.cats} 
                displayCreateForm={this.displayCreateForm}
                updateCatsArray={this.updateCatsArray}
                updateFilteredCats={this.updateFilteredCats}
              />}
            ></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
