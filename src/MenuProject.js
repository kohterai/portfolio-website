import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class MenuProject extends Component {
  render() {
    return (
      <li id={`menu-item-${this.props.project}`} className="menu-item">
        <Link to="{`${this.props.pathName}`}">
          {this.props.project}
        </Link>
      </li>
    )
  }
}

export default MenuProject