import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import preload from './preload.png'
import audiloid1 from './audiloid-1.jpg'
import audiloid2 from './audiloid-2.jpg'

import BackgroundImage from 'react-background-image-loader';


// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Snake extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={audiloid1} className="full"/>

        <div className="text-container">
          <h1>Audiloid</h1>
          <h6>Celluloid based Audio Device</h6>

          <p>Audiloid is audio device that produces sounds by scanning 35mm film that is 
          reeled through the device. Based on the colors of each frame and the overall variance of
          colors within the film, different sounds and notes are produced.</p>

        <div className = "text-paragraphs">
          <h2>Concept</h2>
          <p>The concept of this device began with thinking about ways to utilize old negatives
          that are stored inside a person''s old storage inside their homes. Creating a device that could
          produce original ambient music could give old negatives another chance to be brought out.</p>

          <p>The idea evolved into producing sounds from movie negatives from the website <a href="http://thecolorsofmotion.com/films">The Colors of Motion</a>.
          Each movie has a distinctive color scheme that represents the overall emotional tone of the films.
          Audiloid attempts to translate such color schemes into ambient music.</p>
          </div>
        </div>

        <img src={audiloid2} className="full"/>

        <div className="text-container">
          <h2>Credits</h2>
          <div className="credit-wrapper">

            <div className="credit-person-wrapper">
              <div className="credit-title">
                Sound Design
              </div>
              <div className="credit-name">
                Garreth Chan
              </div>
            </div>

            <div className="credit-person-wrapper">
              <div className="credit-title">
                Concept and Build
              </div>
              <div className="credit-name">
                Koh Terai
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Snake