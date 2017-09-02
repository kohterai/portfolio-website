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
import portrait1 from './photos/portrait-1.jpg'
import portrait2 from './photos/portrait-2.jpg'
import portrait3 from './photos/portrait-3.jpg'
import portrait4 from './photos/portrait-4.jpg'
import portrait5 from './photos/portrait-5.jpg'
import portrait6 from './photos/portrait-6.jpg'
import portrait7 from './photos/portrait-7.jpg'
import portrait8 from './photos/portrait-8.jpg'
import portrait9 from './photos/portrait-9.jpg'
import portrait10 from './photos/portrait-10.jpg'
import portrait11 from './photos/portrait-11.jpg'
import portrait12 from './photos/portrait-12.jpg'
import portrait13 from './photos/portrait-13.jpg'
import portrait14 from './photos/portrait-14.jpg'
import portrait15 from './photos/portrait-15.jpg'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Portraits extends Component {
  render() {
    return (
      <div className="project-content">

        
        <div className="half-container">
          <img src={portrait1} className="half"/>
          <img src={portrait2} className="half"/>
        </div>

        <div className="half-container">
          <img src={portrait3} className="half"/>
          <img src={portrait4} className="half"/>
        </div>

        <div className="half-container">
          <img src={portrait5} className="half"/>
          <img src={portrait6} className="half"/>
        </div>

        <div className="half-container">
          <img src={portrait7} className="half"/>
          <img src={portrait8} className="half"/>
        </div>


        <div className="half-container">
          <img src={portrait9} className="half"/>
          <img src={portrait10} className="half"/>
        </div>

        <div className="half-container">
          <img src={portrait11} className="half"/>
          <img src={portrait12} className="half"/>
        </div>


        <img src={portrait13} className="full"/>

        <div className="half-container">
          <img src={portrait14} className="half"/>
          <img src={portrait15} className="half"/>
        </div>

      </div>
    )
  }
}

export default Portraits