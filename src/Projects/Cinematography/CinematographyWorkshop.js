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


import amame1 from './photos/amame-1.jpg'
import amame2 from './photos/amame-2.jpg'
import amame3 from './photos/amame-3.jpg'
import amame4 from './photos/amame-4.jpg'
import amame5 from './photos/amame-5.jpg'
import amame6 from './photos/amame-6.jpg'
import amame7 from './photos/amame-7.jpg'
import amame8 from './photos/amame-8.jpg'
import amame9 from './photos/amame-9.jpg'

import ImageLoader from '../ImageLoader'


class CinematographyWorkshop extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://www.youtube.com/watch?v=ZJbmMQp45JY&list=PLK-Ssgo2mo27eGt-vQXhf9x7c_Af_6LFN' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>


        <div className="text-container">
          <h1>Cinematography Workshop</h1>
          <h6>Workshops at NYU Abu Dhabi</h6>

          <p>I organized and led a series of Tuesday night Cinematography workshops at NYU Abu Dhabi.
          At every workshop we attempted to recreate a scene from a particular movie. We would
          begin the workshops by disecting the scene, and look through supplementary material
          (American Cinematographer articles, BTS videos) to understand the techniques behind each setup.</p>
        </div>

        <ImageLoader source={amame1} ratio="r235"/>

        <ImageLoader source={amame2} ratio="r235"/>

        <ImageLoader source={amame3} ratio="r235"/>

        <ImageLoader source={amame4} ratio="r235"/>

        <ImageLoader source={amame5} ratio="r235"/>

        <ImageLoader source={amame6} ratio="r235"/>

        <ImageLoader source={amame7} ratio="r235"/>

        <ImageLoader source={amame8} ratio="r235"/>

        <ImageLoader source={amame9} ratio="r235"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Music" name="Jules Bello" />
              <Credits title="Cinematography" name="Koh Terai" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CinematographyWorkshop