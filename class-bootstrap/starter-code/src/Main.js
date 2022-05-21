import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "./data.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {beastData.map(beast => (
              <HornedBeast
                key={beast._id}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
