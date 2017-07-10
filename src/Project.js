import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Project extends Component {
  render() {
    return (
      <div>
        <h2>PROJECT SECTION</h2>
        <div>{this.props.children}</div>
      </div>
    )
  }
}


export default Project
