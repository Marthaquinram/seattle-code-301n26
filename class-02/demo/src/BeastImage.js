import React from  'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

class BeastImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "YAY!"
    }
  }

  handleClick = () => {
    if (this.state.status === "YAY!") {
      this.setState({ status: "NAY!" });
    } else {
      this.setState({ status: "YAY!" });
    }
  }

  render() {
    return (
      <Container>
        <Image src={this.props.image} alt="my beautiful beast!" className="beastImg" onClick={this.handleClick} />
        <h2>🖤{this.state.status}🖤</h2>
      </Container>
    )
  }
}

export default BeastImage;