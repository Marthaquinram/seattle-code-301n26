import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import teen from "./assets/teen.jpg";
import Button from "react-bootstrap/Button";

class Child extends React.Component {

  askMomforMoney = (amountOfMoney) => {
    this.props.giveBillyMoney(amountOfMoney);
  }

  render() {
    return (
      <Container>
        <Card className="Child" style={{ width: '18rem' }}>
          <Card.Title>Billy</Card.Title>
          <Card.Img src={teen} alt={"Billy"} />
          <Card.Text>I am the Billy and I have {this.props.billysMoney} dollars.</Card.Text>
          <Button onClick={() => this.askMomforMoney(10)} >Ask Mom for $10</Button>
          <Button onClick={() => this.askMomforMoney(20)} >Ask Mom for $20</Button>
        </Card>
      </Container>
    )
  }
}

export default Child;
