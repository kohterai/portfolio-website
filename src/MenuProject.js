import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class MenuProject extends Component {

  render() {
    return (
      <li onClick={this.props.menuClicked} id={`menu-item-${this.props.refName}`} className="menu-item">
        <NavLink to={`${this.props.pathName}`}>
          {this.props.project}
        </NavLink>
      </li>
    )
  }
}

export default MenuProject