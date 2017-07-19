import React, { Component } from 'react';
import {
} from 'react-router-dom'

import LazyLoad from 'react-lazy-load';
import ProgressiveImage from 'react-progressive-bg-image';
import preload from './preload.png'

      // <LazyLoad offsetVertical={500}>

      // </LazyLoad>

class ImageLoader extends Component {
  render() {
    return (
      <ProgressiveImage
        src={this.props.source}
        placeholder= {preload}
        className="full bg-image"
        blur = {0}
        transition="all 0.3s linear"
        style={{
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />
    )
  }
}

export default ImageLoader