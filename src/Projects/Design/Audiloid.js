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
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

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

          <p>The idea evolved into producing sounds from movie negatives from the website <a target="_blank" href="http://thecolorsofmotion.com/films">The Colors of Motion</a>.
          Each movie has a distinctive color scheme that represents the overall emotional tone of the films.
          Audiloid attempts to translate such color schemes into ambient music. This project was produced as a part of
          <a target="_blank" href="http://www.felix-beck.de/nyuad/teaching/doku.php?id=utilitas_venustas_firmitas">Utilitas, Venustas, Firmitas</a> - Spring 2017.</p>
          </div>
        </div>

        <img src={audiloid2} className="full"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Sound</h2>
            <p>The sounds were composed in three categories: red, green, and blue.
            Each category contained four notes across two different octaves, with four
            different physical variations to the synthesizer used (i.e. different resonance,
            introduction of additional FM or sine waves, utilizing analog versus digital
            processing). That gave each category sixteen notes to utilize in the creation
            of the soundscape.</p>

            <p>For our demo using the Wall-E film, Red evoked senses of dust, danger and corrosion, requiring an abrasive and
            metallic texture to the synthesizer. Green evoked senses of life and lushness,
            requiring a hollow and delicate texture to the synthesizer. Blue evoked senses of
            mystery and technology, requiring a robotic texture to the synthesizer.</p>
          </div>
        </div>

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://www.youtube.com/watch?v=E0vhWfU_u_Q' controls="true"
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Sound Design" name="Garreth Chan" />
              <Credits title="Concept and Build" name="Koh Terai" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://github.com/kohterai/Audiloid" title="View Code"/>
        </div>
      </div>
    )
  }
}

export default Snake