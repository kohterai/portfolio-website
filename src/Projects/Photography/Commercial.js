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
import commercial1 from './photos/commercial-1.jpg'
import commercial2 from './photos/commercial-2.jpg'
import commercial3 from './photos/commercial-3.jpg'
import commercial4 from './photos/commercial-4.jpg'
import commercial5 from './photos/commercial-5.jpg'
import commercial6 from './photos/commercial-6.jpg'
import commercial7 from './photos/commercial-7.jpg'
import commercial8 from './photos/commercial-8.jpg'
import commercial9 from './photos/commercial-9.jpg'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Sports extends Component {
  render() {
    return (
      <div className="project-content">
        <div className="half-container">
          <img src={commercial1} className="half"/>
          <img src={commercial2} className="half"/>
        </div>
        
        <img src={commercial3} className="full"/>

        <img src={commercial4} className="full"/>
        <img src={commercial5} className="full"/>
        <img src={commercial6} className="full"/>

        <img src={commercial7} className="full"/>
        <img src={commercial8} className="full"/>

        <img src={commercial9} className="full"/>

      </div>
    )
  }
}

export default Sports