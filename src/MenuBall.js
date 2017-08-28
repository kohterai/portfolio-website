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
      <div id="menu-ball" style={{
      height: "6px",
      width: "6px",
      backgroundColor: "#81a8c5",
      position: "fixed",
      borderRadius: "50%"
      }} />
    )
  }
}

export default MenuBall