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

import ookami1 from './photos/ookami-1.jpg'
import ookami2 from './photos/ookami-2.jpg'
import ookami3 from './photos/ookami-3.jpg'
import ookami4 from './photos/ookami-4.jpg'
import ookami5 from './photos/ookami-5.jpg'
import ookami6 from './photos/ookami-6.jpg'
import ookami7 from './photos/ookami-7.jpg'
import ookami8 from './photos/ookami-8.jpg'
import ookami9 from './photos/ookami-9.jpg'

import ImageLoader from '../ImageLoader'


class Ookami extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={ookami3} ratio="r235"/>

        <div className="text-container">
          <h1>Ookami Shonen</h1>
          <h6>Short Film</h6>

          <p>A young boy joins a mysterious organization and ends up finding out
          some of their darkest secrets. Ookami Shonen was shot in Japan and is currently in post-production.</p>

        </div>

        <ImageLoader source={ookami2} ratio="r235"/>

        <ImageLoader source={ookami1} ratio="r235"/>

        <ImageLoader source={ookami6} ratio="r235"/>

        <ImageLoader source={ookami9} ratio="r235"/>

        <ImageLoader source={ookami7} ratio="r235"/>

        <ImageLoader source={ookami4} ratio="r235"/>

        <ImageLoader source={ookami8} ratio="r235"/>

        <ImageLoader source={ookami5} ratio="r235"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Hiroyuki Ura" />
              <Credits title="Cinematographer" name="Koh Terai" />
              <Credits title="Gaffer" name="Teruki Kitazawa" url="http://teru.site/"/>
              <Credits title="Makeup" name="Miyachi Hiroshi" url="https://www.miyachihiroshi.com/" />
              <Credits title="Sound" name="Yasunori Suzuki" url="https://www.miyachihiroshi.com/" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ookami