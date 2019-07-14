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

import intersection1 from './photos/intersection-1.jpg'
import intersection2 from './photos/intersection-2.jpg'
import intersection3 from './photos/intersection-3.jpg'
import intersection4 from './photos/intersection-4.jpg'
import intersection5 from './photos/intersection-5.jpg'
import intersection6 from './photos/intersection-6.jpg'
import intersection7 from './photos/intersection-7.jpg'
import intersection8 from './photos/intersection-8.jpg'

import ImageLoader from '../ImageLoader'


class Intersection extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper" style={{marginTop: "20px", marginBottom: "20px", backgroundColor: "white"}}>
          <ReactPlayer className="project-video" url='https://www.youtube.com/watch?v=yQCVH6uY90k' width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>You're the Reason</h1>
          <h6>Music Video for <i>Intersection</i></h6>

          <p>Music video for Avex boy band INTERSECTION for their 1st Digital Album.</p>

        </div>

        <ImageLoader source={intersection1} ratio="r235"/>

        <ImageLoader source={intersection2} ratio="r235"/>

        <ImageLoader source={intersection3} ratio="r235"/>

        <ImageLoader source={intersection4} ratio="r235"/>

        <ImageLoader source={intersection5} ratio="r235"/>

        <ImageLoader source={intersection6} ratio="r235"/>

        <ImageLoader source={intersection7} ratio="r235"/>

        <ImageLoader source={intersection8} ratio="r235"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Masaki Ueda" url="https://vimeo.com/292657834/"/>
              <Credits title="Creative Director" name="Mitsuyo Demura" url="https://konel.jp/"/>
              <Credits title="Producer" name="Go Komaki" url="http://4-3-3.co.jp/"/>
              <Credits title="Cinematography" name="Koh Terai" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intersection
