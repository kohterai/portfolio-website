import React, { Component } from 'react';
import {
} from 'react-router-dom'

import LazyLoad from 'react-lazy-load';
import ProgressiveImage from 'react-progressive-bg-image';
import preload from './preload.png'

class ImageLoader extends Component {
  render() {
    return (
      <LazyLoad offsetVertical={1000}>
        <ProgressiveImage
          src={this.props.source}
          placeholder= {preload}
          className="full bg-image"
          blur = "0"
          transition="opacity 0.5s ease-out"
          style={{
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
          }}
        />
      </LazyLoad>
    )
  }
}

export default ImageLoader