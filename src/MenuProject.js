import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

class MenuProject extends Component {
  render() {
    return (
      <li id={`menu-item-${this.props.project}`} className="menu-item">
        <NavLink to={`${this.props.pathName}`}>
          {this.props.project}
        </NavLink>
      </li>
    )
  }
}

export default MenuProject