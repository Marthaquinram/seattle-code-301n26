import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: "",
    };
  }

  addFavorites = () => {
    this.setState({ favorites: this.state.favorites + "❤️" });
  };

  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              onClick={this.addFavorites}
              />
            <Card.Body>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Favorites: {this.state.favorites}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;
