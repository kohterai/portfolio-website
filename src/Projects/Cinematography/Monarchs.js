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

import monarchs1 from './photos/monarchs-1.jpg'
import monarchs2 from './photos/monarchs-2.jpg'
import monarchs3 from './photos/monarchs-3.jpg'
import monarchs4 from './photos/monarchs-4.jpg'
import monarchs5 from './photos/monarchs-5.jpg'
import monarchs6 from './photos/monarchs-6.jpg'
import monarchs7 from './photos/monarchs-7.jpg'
import monarchs8 from './photos/monarchs-8.jpg'
import monarchs9 from './photos/monarchs-9.jpg'

import ImageLoader from '../ImageLoader'


class Monarchs extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={monarchs2} ratio="r169"/>

        <div className="text-container">
          <h1>Los Mimos Monarcas</h1>
          <h6>Short Film</h6>

          <p>After the death of her partner and the rest of the migrating butterflies,
          the last monarch survivor has one last message to tell humanity. Los Mimos Monarcas was
          shot in Mexico and currently in post-production.</p>

        </div>

        <ImageLoader source={monarchs1} ratio="r169"/>

        <ImageLoader source={monarchs3} ratio="r169"/>

        <ImageLoader source={monarchs4} ratio="r169"/>

        <ImageLoader source={monarchs5} ratio="r169"/>

        <ImageLoader source={monarchs6} ratio="r169"/>

        <ImageLoader source={monarchs7} ratio="r169"/>

        <ImageLoader source={monarchs8} ratio="r169"/>

        <ImageLoader source={monarchs9} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Alexis Gambis" url="http://alexisgambis.com"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="Producer" name="Abraham Dayan" url="http://www.phoenixfilms.info"/>
              <Credits title="Butterfly" name="Gaby Munoz" url="https://www.chulatheclown.mx/"/>
              <Credits title="Butterfly" name="Sampo Kurppa" url="http://agitcirk.com/fin/en/info/sampo-kurppa/"/>
              <Credits title="Production" name="Imaginal Disc" url="http://www.imaginaldisc.com/"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Monarchs