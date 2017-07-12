import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class MenuTitle extends Component {
  render() {
    return (
      <div id={`menu-title-${this.props.category}`} className="menu-title">
        <Link  to={'/'}>
          {this.props.category}
        </Link>
      </div>
    )
  }
}

export default MenuTitle