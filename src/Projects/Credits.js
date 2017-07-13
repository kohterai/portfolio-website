import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Credits.css'

class Credits extends Component {
  render() {
    return (
      <div className="credit-person-wrapper">
        <div className="credit-title">
          {this.props.title}
        </div>
        <div className="credit-name">
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default Credits