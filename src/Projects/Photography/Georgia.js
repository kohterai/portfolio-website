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
import georgia1 from './georgia-1.jpg'
import georgia2 from './georgia-2.jpg'
import georgia3 from './georgia-3.jpg'
import georgia4 from './georgia-4.jpg'
import georgia5 from './georgia-5.jpg'
import georgia55 from './georgia-5-5.jpg'
import georgia6 from './georgia-6.jpg'
import georgia7 from './georgia-7.jpg'
import georgia8 from './georgia-8.jpg'
import georgia9 from './georgia-9.jpg'
import georgia10 from './georgia-10.jpg'
import georgia11 from './georgia-11.jpg'
import georgia12 from './georgia-12.jpg'
import georgia13 from './georgia-13.jpg'


// <div className="text-container">
//   <h1>Georgia</h1>
//   <h6>Photo collection from Georgia</h6>

//   <p>Photographs taken in Tiblisi and Stepantsminda during October 2013.</p>
// </div>

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Georgia extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={georgia2} className="full"/>



        <img src={georgia1} className="full"/>
        <img src={georgia3} className="full"/>
        <img src={georgia4} className="full"/>
        <div className="half-container">
          <img src={georgia5} className="half"/>
          <img src={georgia55} className="half"/>
        </div>
        <img src={georgia6} className="full"/>
        <img src={georgia7} className="full"/>
        <img src={georgia8} className="full"/>
        <img src={georgia9} className="full"/>
        <img src={georgia10} className="full"/>
        <img src={georgia11} className="full"/>
        <div className="half-container">
          <img src={georgia12} className="half"/>
          <img src={georgia13} className="half"/>
        </div>
      </div>
    )
  }
}

export default Georgia