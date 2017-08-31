import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class MenuProject extends Component {

  render() {
    return (
      <div>
        <NavLink to={`${this.props.pathName}`} onClick={this.props.menuClicked} id={`menu-item-${this.props.refName}`} className="menu-item">
          {this.props.project}
        </NavLink>
      </div>
    )
  }
}

export default MenuProject