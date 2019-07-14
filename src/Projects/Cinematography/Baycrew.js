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

import baycrew1 from './photos/baycrew-1.jpg'
import baycrew2 from './photos/baycrew-2.jpg'
import baycrew3 from './photos/baycrew-3.jpg'
import baycrew4 from './photos/baycrew-4.jpg'
import baycrew5 from './photos/baycrew-5.jpg'
import baycrew6 from './photos/baycrew-6.jpg'

import ImageLoader from '../ImageLoader'


class Baycrew extends Component {
  render() {
    return (
      <div className="project-content">

              <div className="project-video-wrapper" style={{marginTop: "10px", marginBottom: "40px", backgroundColor: "white"}}>
                <ReactPlayer className="project-video" url='https://vimeo.com/338544499' width='100%' height='100%'/>
              </div>
        <div className="text-container">


          <h1>Baycrew's Summer 2019 Campaign</h1>
          <h6>Web Commercial for a fashion e-commerce store</h6>

        </div>

        <ImageLoader source={baycrew1} ratio="r169"/>

        <ImageLoader source={baycrew2} ratio="r169"/>

        <ImageLoader source={baycrew3} ratio="r169"/>

        <ImageLoader source={baycrew4} ratio="r169"/>

        <ImageLoader source={baycrew5} ratio="r169"/>

        <ImageLoader source={baycrew6} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Masaki Ueda" url="https://masakiueda.club"/>
              <Credits title="Producer" name="Go Komaki" url="http://4-3-3.co.jp/"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="1st AC" name="Flavio Gusmao" url="https://vimeo.com/user3813077" />
              <Credits title="Gaffer" name="Keisuke Ikeda" url="https://keisuke-ikeda.tumblr.com/"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Baycrew
