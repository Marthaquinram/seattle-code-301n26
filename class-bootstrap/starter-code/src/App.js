import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <Container fluid id="App">
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
