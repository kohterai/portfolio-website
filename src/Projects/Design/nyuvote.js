import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import preload from './preload.png'
import nyuvote1 from './nyuvote-1.jpg'
import nyuvote2 from './nyuvote-2.jpg'

import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class NYUVote extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={nyuvote1} className="full"/>

        <div className="text-container">
          <h1>NYU Vote</h1>
          <h6>Official NYU Voting Platform</h6>

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

        <img src={nyuvote2} className="full"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Sound</h2>
            <p>Some paragrph about the sound...The concept of this device began with thinking about ways to utilize old negatives
            that are stored inside a person''s old storage inside their homes. Creating a device that could
            produce original ambient music could give old negatives another chance to be brought out.</p>
          </div>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Lead Engineer" name="Lingliang Zhang" />
              <Credits title="Design/Front-end" name="Koh Terai" />
              <Credits title="Technical Support" name="Moiri Gamboni" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://studentvote.nyu.edu/" title="Visit Website"/>
        </div>
      </div>
    )
  }
}

export default NYUVote