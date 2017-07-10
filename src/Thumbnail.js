import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Thumbnail extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <Link to={`/projects/${this.props.title}`}>{this.props.title}</Link>
        <p>{this.props.caption}</p>
      </div>
    )
  }
}

export default Thumbnail