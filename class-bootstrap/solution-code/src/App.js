import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      // Containers provide a means to center and horizontally pad your site’s contents
      <Container fluid id="App">
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
