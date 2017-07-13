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
        <img src={theater1} className="full"/>

        <img src={theater2} className="full"/>
        <img src={theater3} className="full"/>

        <img src={theater4} className="full"/>
        <img src={theater5} className="full"/>
        <img src={theater6} className="full"/>

        <img src={theater7} className="full"/>
        <img src={theater8} className="full"/>

        <img src={theater9} className="full"/>

      </div>
    )
  }
}

export default Sports