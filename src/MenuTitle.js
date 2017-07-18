import React, { Component } from 'react';

class MenuTitle extends Component {
  render() {
    return (
      <div id={`menu-title-${this.props.category}`} className="menu-title">
        <a href={`/#/#${this.props.category}`}>
          {this.props.category}
        </a>
      </div>
    )
  }
}

export default MenuTitle