import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BackgroundImage from 'react-background-image-loader';
import ReactPlayer from 'react-player'

import Credits from '../Credits';
import BigButton from '../BigButton';


import yalla1 from './photos/yalla-1.jpg'
import yalla2 from './photos/yalla-2.jpg'
import yalla3 from './photos/yalla-3.jpg'
import yalla5 from './photos/yalla-5.jpg'
import yalla4 from './photos/yalla-4.jpg'
import yalla6 from './photos/yalla-6.jpg'


import ImageLoader from '../ImageLoader'


class Yalla extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={yalla1} />

        <div className="text-container">
          <h1>Yalla</h1>
          <h6>Social Events Web App</h6>

          <p>Yalla is an events-centric social network focused on communities. It integrates 
        with existing cloud based calendar workflows. The system enables users to search for nearby events and RSVP to 
        them. I lead the design and coded the front-end for the startup.</p>

        </div>

      <div className="project-content">
        <div className="text-container">
          <h2>Front End</h2>

          <p>SVGs were used throughout Yalla to maximize compatibility across 
        screen densities and to minimize file sizes.  PNG fallbacks were 
        implemented to support older systems. CSS animations were used to create fluid interactions.</p>
        </div>
      </div>

        <ImageLoader source={yalla2} />

      <div className="project-content">
        <div className="text-container">
          <h2>Interaction</h2>
          <p>Yalla consists of a 3-pane interface, which is updated according to the user's actions. For desktops and devices with large screens, all three panes are shown at once.
        For tablets, two panes can be displayed at once. For mobile, only one pane is displayed. The app is fully responsive.</p>
          <p>The images below show how the three panels would appear on a laptop and mobile device.  The right two panels in the Yalla interface take up the full length of the screen to maximize screen real estate.
        The menu intentionally does not cover the whole screen to remind the user that one can swipe back to the main events panel.</p>
        </div>
      </div>

        <ImageLoader source={yalla5} />
        <ImageLoader source={yalla3} />

      <div className="project-content">
        <div className="text-container">
          <h2>Event Creation</h2>
          <p>When users try to create a new event, the right panel updates to the "create event" screen.</p>
        </div>
      </div>

        <ImageLoader source={yalla6} />

      <div className="project-content">
        <div className="text-container">
          <h2>Logo</h2>
          <p>I oversaw the logo creation process. We imagined the logo to be constructed of 
          straight lines, resemblant of hands on a clock.</p>
        </div>
      </div>

        <ImageLoader source={yalla4} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Lead Engineer" name="Ling Zhang" />
              <Credits title="Business" name="Brett Bolton" />
              <Credits title="Design/Front-end" name="Koh Terai" />
              <Credits title="Logo" name="Mariko Kuroda" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Yalla