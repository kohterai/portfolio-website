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
                    <Link to={`${this.props.path}`}>
                      <img style={{ maxWidth: '100%',
                                    display: 'block' }}
                        src={this.props.thumbnail} />
                    </Link>

        <Link style={{ textDecoration: 'none',
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: '0.8em'}}
                      to={`${this.props.path}`}>{this.props.title}</Link>
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