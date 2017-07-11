import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Thumbnail.css'


class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnail" style={{ flexGrow: '1',
                    width: '33%',
                    maxWidth: '33%',
                    textAlign: 'center',
                    margin: '20px 0px 50px 0px'}}>
        <div style={{
          width: '100%',
          paddingBottom: '75%',
          position: 'relative'
          }}>
          <div style={{
            background: `url(${this.props.thumbnail})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            top: '0',bottom:'0', left: '0', right: '0'
          }} />
        </div>
        <Link style={{ textDecoration: 'none',
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