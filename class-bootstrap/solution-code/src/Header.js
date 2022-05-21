import React from "react";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSwitch: false
    }
  }

  changeColors = () => {
    if (this.state.colorSwitch) {
      this.setState({ colorSwitch: false });
    } else {
      this.setState({ colorSwitch:true });
    }
  }

  render() {
    return (
      <div>
        {this.state.colorSwitch ? 
          <h1 id="purpleHeader" >🤘 Gallery of Horns 🤘</h1>
          :
          <h1 id="blueHeader" >🤘 Horned Beasts 🤘</h1>
        }
          <Button 
            onClick={this.changeColors} 
            className="btn btn-outline-info mb-5"
          >^^ Click me to change colors! ^^</Button>
      </div>
    );
  }
}

export default Header;
