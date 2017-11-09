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
import burj0 from './photos/burj-0.jpg'
import burj1 from './photos/burj-1.jpg'
import burj2 from './photos/burj-2.jpg'
import burj3 from './photos/burj-3.jpg'
import burj4 from './photos/burj-4.jpg'
import burj5 from './photos/burj-5.jpg'




// <div className="text-container">
//   <h1>burj</h1>
//   <h6>Photo collection from burj</h6>

//   <p>Photographs taken in Tiblisi and Stepantsminda during October 2013.</p>
// </div>

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Burj extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={burj5} className="full"/>

        <div className="text-container">
          <h1>Burj Shadow</h1>
          <h6>Burj Khalifa Timelapse</h6>

          <p>Commisioned project, chasing the Burj Khalifa shadow from Sunrise to Sunset.
          Project still in post-production. Led by Roberto Casati and Goffredo Puccetti.
          More details to follow. The project was selected to be a part of the <a href="http://www.globalgradshow.com/projects/burj-shadow/" target="_blank">Global Grad Show 2017</a>.</p>

        </div>
        <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t31.0-8/15168931_1027285450732867_3666809875744094507_o.jpg?oh=4ef5fe657625f6cb71e0bc6033998c45&oe=5A0700B3" className="full"/>

        <img src={burj2} className="full"/>
        <img src={burj1} className="full"/>
        <img src={burj3} className="full"/>
        <img src={burj4} className="full"/>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="http://gulfnews.com/xpress/news/nyu-ad-students-scale-new-heights-track-burj-shadow-1.2117082" title="Press"/>
          <BigButton color="black" textColor="white" url="http://www.globalgradshow.com/projects/burj-shadow/" title="Global Grad Show"/>
        </div>
      </div>
    )
  }
}

export default Burj