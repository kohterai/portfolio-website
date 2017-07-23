import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class MenuTitle extends Component {
  render() {
    return (
      <div onClick={this.props.menuClicked} id={`menu-title-${this.props.category}`} className="menu-title">
        <Link to={`/#${this.props.category}`}>{this.props.category}</Link>
      </div>
    )
  }
}

export default MenuTitle

// <a href={`/#/#${this.props.category}`}>
//   {this.props.category}
// </a>