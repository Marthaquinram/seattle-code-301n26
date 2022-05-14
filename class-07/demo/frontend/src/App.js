import React from 'react'
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  getFood = async () => {
    const url = process.env.REACT_APP_API;
    const shoppingList = await axios.get(`${url}/shoppingList?type=food`);
    console.log("shopping list: ", shoppingList.data.items);
    this.setState({ shoppingList: shoppingList.data.items });
  }

  getSupplies = async () => {
    const url = process.env.REACT_APP_API;
    const shoppingList = await axios.get(`${url}/shoppingList?type=supplies`);
    this.setState({ shoppingList: shoppingList.data.items});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getFood}>Get Food List Directly</button>
        <button onClick={this.getSupplies}>Get Supplies List Directly</button>

        <ul>
          {this.state.shoppingList.length && this.state.shoppingList.map((item, idx) => (
            <li key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
