import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Thumbnail extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'lightblue',
                    flexGrow: '1',
                    maxWidth: '33%'}}>
        <img style={{ maxWidth: '100%',
                      display: 'block' }}
          src={this.props.thumbnail} />
        <Link to={`/projects/${this.props.title}`}>{this.props.title}</Link>
        <p>{this.props.caption}</p>
      </div>
    )
  }
}

export default Thumbnail