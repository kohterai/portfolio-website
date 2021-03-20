import React, { Component } from 'react';

class MenuBall extends Component {

  constructor(props) {
    super(props);
    // states are currently not in use
    this.state = {clickMove: false,
                  target: false};
  }

  render() {
    return (
      <div id={this.props.idName} style={{
      height: "6px",
      width: "6px",
      backgroundColor: "#F5AC1F",
      position: "fixed",
      borderRadius: "50%"
      }} />
    )
  }
}

export default MenuBall