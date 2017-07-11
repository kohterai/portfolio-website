import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Thumbnail extends Component {
  render() {
    return (
      <div style={{ flexGrow: '1',
                    maxWidth: '33%',
                    textAlign: 'center',
                    margin: '20px 0px 50px 0px'}}>
        <img style={{ maxWidth: '100%',
                      display: 'block' }}
          src={this.props.thumbnail} />
        <Link style={{ textDecoration: 'none',
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: '0.8em'}}
                      to={`/projects/${this.props.title}`}>{this.props.title}</Link>
        <div style={{
          color:'#a3a3a3',
          fontSize: '0.6em',
          fontWeight: '300'
        }}>
          {this.props.caption}</div>
      </div>
    )
  }
}

export default Thumbnail