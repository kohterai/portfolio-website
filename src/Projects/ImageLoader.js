import React, { Component } from 'react';
import {
} from 'react-router-dom'

import LazyLoad from 'react-lazy-load';
import ProgressiveImage from 'react-progressive-bg-image';
import preload from './preload.png'
import preload235 from './preload235.png'
import preload169 from './preload16-9.png'

      // <LazyLoad offsetVertical={500}>

      // </LazyLoad>

class ImageLoader extends Component {
  render() {

    var placeholderRatio = 0
    if (this.props.ratio == "r235") {
      placeholderRatio = preload235
    } else if (this.props.ratio == "r169") {
      placeholderRatio = preload169
    } else {
      placeholderRatio = preload
    }
    return (
      <ProgressiveImage
        src={this.props.source}
        placeholder = {placeholderRatio}
        className={`full bg-image ${this.props.ratio}`}
        blur = {0}
        transition="all 0.3s linear"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          margin: "30px 0px",
          borderRaius: "5px"
        }}
      />
    )
  }
}

export default ImageLoader