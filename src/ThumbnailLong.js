import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './Thumbnail.css'
import $ from 'jquery'


// https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css

class Thumbnail extends Component {
  handleClick() {
    console.log("thumbnail clicked")
  }

  render() {
    return (
      <div className="thumbnail-long-wrapper-wrapper">
      <div className="thumbnail-long-wrapper">
        <div className="thumbnail-long thumbnail-long-left">
          <Link onClick={this.handleClick} to={`${this.props.path}`}>
            <div style={{
              width: '100%',
              paddingBottom: '42%',
              position: 'relative'
              }}>
              <div className="thumbnailimage-long" style={{
                background: `url(${this.props.thumbnail1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'absolute',
                top: '0',bottom:'0', left: '0', right: '0'
              }} />
            </div>
          </Link>
        </div>
        <div className="thumbnail-long">
          <Link to={`${this.props.path}`}>
            <div style={{
              width: '100%',
              paddingBottom: '42%',
              position: 'relative'
              }}>
              <div className="thumbnailimage-long" style={{
                background: `url(${this.props.thumbnail2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'absolute',
                top: '0',bottom:'0', left: '0', right: '0'
              }} />
            </div>
          </Link>
        </div>
        
        <div className="thumbnail-long thumbnail-long-right">
          <Link to={`${this.props.path}`}>
            <div style={{
              width: '100%',
              paddingBottom: '42%',
              position: 'relative'
              }}>
              <div className="thumbnailimage-long" style={{
                background: `url(${this.props.thumbnail3})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'absolute',
                top: '0',bottom:'0', left: '0', right: '0'
              }} />
            </div>
          </Link>
        </div>
      </div>

              <div className = "thumbnail-long-caption">
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
        </div>

    )
  }
}

export default Thumbnail