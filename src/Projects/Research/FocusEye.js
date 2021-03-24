import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import focuseye1 from './photos/focuseye-1.jpg'
import focuseye2 from './photos/focuseye-2.jpg'
import focuseye3 from './photos/focuseye-3.jpg'
import focuseye4 from './photos/focuseye-4.jpg'
import focuseye5 from './photos/focuseye-5.jpg'
import focuseye6 from './photos/focuseye-6.jpg'
import focuseye7 from './photos/focuseye-7.jpg'
import focuseye8 from './photos/focuseye-8.jpg'


import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import ImageLoader from '../ImageLoader'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class focuseye extends Component {
  render() {
    return (
      <div className="project-content">
        {/* <ImageLoader source={focuseye8} /> */}
        <ImageLoader source={focuseye1} />


        <div className="text-container">
          <h1>Focus Eye</h1>
          <h6>Follow focus reimagined</h6>
          <p>FocusEye attempts to bring touch-to-focus gestures to cinema cameras which
          traditionally do not support autofocus capabilities. By using the FocusEye,
          focus pullers can adjust focus on cinema cameras and cinema lenses as if
          they were focusing on their mobile phones.</p>

          <div className = "text-paragraphs">
            <h2>Concept</h2>
            <p>Typically on a film set, the 1st Assistant Camera uses a device
            called a follow focus to manually adjust focus. This is an extremely challenging
            task that takes lots of experience and concentration to execute perfectly.</p>

            <p>Like a smart phone, users of the FocusEye simply need to touch a section of the screen
            they would like to focus to. Our device points to the direction, measures distance, and
            adjusts focus. While the finger is held on the screen, focus continuously tracks the subject.</p>
          </div>
        </div>
        
        <ImageLoader source={focuseye2} />
        <ImageLoader source={focuseye3} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Technology</h2>
            <p>FocusEye went through multiple iterations of hardware design to make the system
            as compact and versatile as possible. The head is designed with a hotshoe and a 3/8 inch
            screw hole for mounting. The system is powered through a Raspberry Pi running Kivy.</p>
          </div>
        </div>
        

        <ImageLoader source={focuseye4} />
        <ImageLoader source={focuseye5} />
        <ImageLoader source={focuseye6} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Results</h2>
            <p>The final system delivered promising results as a proof-of-concept demo.
            Currently no computer vision is utilized in the device.
            An added layer of computer vision can improve accuracy and decrease
            calibration time for intial setup. Our test build was with a Zeiss CP.2 50mm lens on a
            Canon 5D and Panasonic GH4.</p>
          </div>
        </div>


        <ImageLoader source={focuseye7} />

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/5erCM_hGbhY' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Product Designer/Engineer" name="Shunsuke Kasahara" url="http://shunsukekasahara.com" />
              <Credits title="Concept/Software" name="Koh Terai" />
              <Credits title="Mentor" name="Saurabh Ray" url="https://nyuad.nyu.edu/en/academics/divisions/science/faculty/saurabh-ray.html" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="http://focus-eye.com" title="Visit Website"/>
        </div>
      </div>
    )
  }
}

export default focuseye