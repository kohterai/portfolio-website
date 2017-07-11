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
        <img style={{ maxWidth: '200px',
                      display: 'block' }}
          src={this.props.thumbnail} />
        <Link to={`/projects/${this.props.title}`}>{this.props.title}</Link>
        <p>{this.props.caption}</p>
      </div>
    )
  }
}

export default Thumbnail