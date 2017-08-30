import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './Thumbnail.css'

// https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css

class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnail">
        
        <Link to={`${this.props.path}`}>
          <div style={{
            width: '100%',
            paddingBottom: '60%',
            position: 'relative'
            }}>
            <div className="thumbnailimage" style={{
              background: `url(${this.props.thumbnail})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'absolute',
              top: '0',bottom:'0', left: '0', right: '0'
            }} />
          </div>
        </Link>
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