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

import oryx1 from './photos/oryx-1.jpg'
import oryx2 from './photos/oryx-2.jpg'
import oryx3 from './photos/oryx-3.jpg'
import oryx4 from './photos/oryx-4.jpg'
import oryx5 from './photos/oryx-5.jpg'
import oryx6 from './photos/oryx-6.jpg'
import oryx7 from './photos/oryx-7.jpg'
import oryx8 from './photos/oryx-8.jpg'
import oryx9 from './photos/oryx-9.jpg'
import oryx10 from './photos/oryx-10.jpg'

import ImageLoader from '../ImageLoader'


class Oryx extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={oryx8} ratio="r169"/>

        <div className="text-container">
          <h1>Insān</h1>
          <h6>Short Film</h6>

          <p>Insān is a about an Emirati man that can communicate with the Oryx.
          Oryx footage was captured in the Arabian Oryx Protected Area bordering Saudi Arabia.</p>

        </div>

        <ImageLoader source={oryx1} ratio="r169"/>

        <ImageLoader source={oryx2} ratio="r169"/>

        <ImageLoader source={oryx3} ratio="r169"/>

        <ImageLoader source={oryx4} ratio="r169"/>

        <ImageLoader source={oryx5} ratio="r169"/>

        <ImageLoader source={oryx6} ratio="r169"/>

        <ImageLoader source={oryx7} ratio="r169"/>

        <ImageLoader source={oryx9} ratio="r169"/>

        <ImageLoader source={oryx10} ratio="r169"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Alexis Gambis" />
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="1st AC" name="Roland Folkmayer" />
              <Credits title="Gaffer" name="Sam Ridgeway" />
              <Credits title="Producer" name="Amal Al Gergawi" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Oryx