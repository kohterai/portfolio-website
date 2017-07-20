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


import rescue1 from './photos/rescue-1.jpg'
import rescue2 from './photos/rescue-2.jpg'
import rescue3 from './photos/rescue-3.jpg'
import rescue4 from './photos/rescue-4.jpg'
import rescue5 from './photos/rescue-5.jpg'
import rescue6 from './photos/rescue-6.jpg'
import rescue7 from './photos/rescue-7.jpg'

import ImageLoader from '../ImageLoader'


class Rescue extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={rescue1} ratio="r235"/>

        <div className="text-container">
          <h1>Rescue</h1>
          <h6>Space Sci-Fi</h6>

          <p>Space Sci-Fi about a spaceship that crashed landed in a desert planet. Shot in Abu Dhabi.</p>

        </div>

        <ImageLoader source={rescue2} ratio="r235"/>

        <ImageLoader source={rescue3} ratio="r235"/>

        <ImageLoader source={rescue4} ratio="r235"/>

        <ImageLoader source={rescue5} ratio="r235"/>

        <ImageLoader source={rescue6} ratio="r235"/>

        <ImageLoader source={rescue7} ratio="r235"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="James Hosken" />
              <Credits title="Cinematography" name="Koh Terai" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rescue