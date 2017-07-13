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
import sport1 from './photos/sport-1.jpg'
import sport2 from './photos/sport-2.jpg'
import sport3 from './photos/sport-3.jpg'
import sport4 from './photos/sport-4.jpg'
import sport5 from './photos/sport-5.jpg'
import sport6 from './photos/sport-6.jpg'
import sport7 from './photos/sport-7.jpg'
import sport8 from './photos/sport-8.jpg'
import sport9 from './photos/sport-9.jpg'
import sport10 from './photos/sport-10.jpg'
import sport11 from './photos/sport-11.jpg'
import sport12 from './photos/sport-12.jpg'
import sport13 from './photos/sport-13.jpg'


// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Sports extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={sport1} className="full"/>
        
        <div className="half-container">
          <img src={sport2} className="half"/>
          <img src={sport3} className="half"/>
        </div>

        <img src={sport4} className="full"/>
        <div className="half-container">
          <img src={sport5} className="half"/>
        </div>
        <img src={sport6} className="full"/>

        <div className="half-container">
          <img src={sport7} className="half"/>
          <img src={sport8} className="half"/>
        </div>


        <img src={sport9} className="full"/>
        <img src={sport10} className="full"/>
        <img src={sport11} className="full"/>
        <img src={sport12} className="full"/>
        <img src={sport13} className="full"/>
      </div>
    )
  }
}

export default Sports