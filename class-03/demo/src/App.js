import React from "react";
import "./App.css";
import OverdraftModal from "./OverdraftModal";
import Parent from "./Parent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Parent/Child Demo</h1>
        <Parent handleShowModal={this.handleShowModal} />
        <OverdraftModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default App;
