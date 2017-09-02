import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'
import ImageLoader from '../ImageLoader'

// Image imports
import theater1 from './photos/theater-1.jpg'
import theater2 from './photos/theater-2.jpg'
import theater3 from './photos/theater-3.jpg'
import theater4 from './photos/theater-4.jpg'
import theater5 from './photos/theater-5.jpg'
import theater6 from './photos/theater-6.jpg'
import theater7 from './photos/theater-7.jpg'
import theater8 from './photos/theater-8.jpg'
import theater9 from './photos/theater-9.jpg'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Sports extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={theater1} />
        <ImageLoader source={theater2} />
        <ImageLoader source={theater3} />
        <ImageLoader source={theater4} />
        <ImageLoader source={theater5} />
        <ImageLoader source={theater6} />
        <ImageLoader source={theater7} />
        <ImageLoader source={theater8} />
        <ImageLoader source={theater9} />
      </div>
    )
  }
}

export default Sports