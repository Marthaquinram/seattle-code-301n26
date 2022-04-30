import React from "react";
import Card from 'react-bootstrap/Card';
import mom from "./assets/mom.jpg";
import Child from "./Child";
import CardGroup from 'react-bootstrap/CardGroup';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      momsMoney: 100,
      billysMoney: 0
    }
  }

  giveBillyMoney = (amountOfMoney) => {
    const parentBalance = this.state.momsMoney - amountOfMoney;

    this.setState({ 
      billysMoney: this.state.billysMoney + amountOfMoney,
      momsMoney: parentBalance
    });

    // if mom's money is === 0, show the overdraft modal
    if (parentBalance < 0) {
      this.props.handleShowModal();
    };
  }

  render() {
    return (
        <CardGroup>
          <Card className="Parent" style={{ width: '18rem' }}>
            <Card.Title>Parent</Card.Title>
            <Card.Img src={mom} alt={"Billy/'s Mom"} />
            <Card.Text>I am the Mom and I have ${this.state.momsMoney} dollars.</Card.Text>
          </Card>

          <Child billysMoney={this.state.billysMoney} giveBillyMoney={this.giveBillyMoney} />
        </CardGroup>
    );
  }
}

export default Parent;
