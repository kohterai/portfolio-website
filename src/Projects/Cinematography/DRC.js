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

import drc1 from './photos/drc-1.jpg'
import drc2 from './photos/drc-2.jpg'
import drc3 from './photos/drc-3.jpg'
import drc4 from './photos/drc-4.jpg'
import drc5 from './photos/drc-5.jpg'
import drc6 from './photos/drc-6.jpg'
import drc7 from './photos/drc-7.jpg'

import ImageLoader from '../ImageLoader'


class DRC extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={drc1} ratio="r169"/>


        <div className="text-container">
          <h1>Field Work DR Congo</h1>
          <h6>Social Research Documentary</h6>

          <p>Field Work DRC (untitled) is a series of short documentaries uncovering
          how social scientists do research out in the field. Several villages in the
          Democratic Republic of Congo is used as a case study.</p>

        </div>


        <ImageLoader source={drc2} ratio="r169"/>

        <ImageLoader source={drc3} ratio="r169"/>

        <ImageLoader source={drc4} ratio="r169"/>

        <ImageLoader source={drc5} ratio="r169"/>

        <ImageLoader source={drc6} ratio="r169"/>

        <ImageLoader source={drc7} ratio="r169"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Peter van der Windt" />
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="Sound" name="Garreth Chan" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DRC