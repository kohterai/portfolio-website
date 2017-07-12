import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import preload from './preload.png'
import audio1 from './audio-1.jpg'

import BackgroundImage from 'react-background-image-loader';

class Snake extends Component {
  render() {
    return (
      <div className="project-content">
        <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

        <div className="text-container">

          <h1>Audiloid</h1>
          <h6>Celluloid based Audio Device</h6>

        <p>Audiloid is audio device that produces sounds by scanning 35mm film that is
reeled through the device. Based on the colors of each frame and the overall variance of
colors within the film, different sounds and notes are produced.</p>

        <h2>Concept</h2>
        </div>

      </div>
    )
  }
}

export default Snake