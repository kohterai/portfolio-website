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

import heatnavi1 from './photos/heatnavi-1.jpg'
import heatnavi2 from './photos/heatnavi-2.jpg'
import heatnavi3 from './photos/heatnavi-3.jpg'
import heatnavi4 from './photos/heatnavi-4.jpg'
import heatnavi5 from './photos/heatnavi-5.jpg'
import heatnavi6 from './photos/heatnavi-6.jpg'
import heatnavi7 from './photos/heatnavi-7.jpg'
import heatnavi8 from './photos/heatnavi-8.jpg'

import ImageLoader from '../ImageLoader'


class Munsingwear extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper" style={{marginTop: "-20px", marginBottom: "-20px", backgroundColor: "white"}}>
          <ReactPlayer className="project-video" url='https://vimeo.com/292657834' width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>Munsingwear Heat Navi</h1>
          <h6>Global CM</h6>

          <p>Commercial for a winter lineup for a major golfwear brand.</p>

        </div>

        <ImageLoader source={heatnavi1} ratio="r235"/>

        <ImageLoader source={heatnavi2} ratio="r235"/>

        <ImageLoader source={heatnavi5} ratio="r235"/>

        <ImageLoader source={heatnavi7} ratio="r235"/>

        <ImageLoader source={heatnavi8} ratio="r235"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Masaki Ueda" url="https://vimeo.com/292657834/"/>
              <Credits title="Producer" name="Go Komaki" url="http://4-3-3.co.jp/"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="1st AC" name="Flavio Gusmao" />
              <Credits title="Gaffer" name="Makoto Tajima" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Munsingwear
