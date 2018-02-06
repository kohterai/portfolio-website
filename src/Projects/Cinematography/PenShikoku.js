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

import penshikoku1 from './photos/penshikoku-1.jpg'
import penshikoku2 from './photos/penshikoku-2.jpg'
import penshikoku3 from './photos/penshikoku-3.jpg'
import penshikoku4 from './photos/penshikoku-4.jpg'
import penshikoku5 from './photos/penshikoku-5.jpg'
import penshikoku6 from './photos/penshikoku-6.jpg'
import penshikoku7 from './photos/penshikoku-7.jpg'
import penshikoku8 from './photos/penshikoku-8.jpg'

import ImageLoader from '../ImageLoader'


class PenShikoku extends Component {
  render() {
    return (
      <div className="project-content">
        <div className="project-video-wrapper" style={{marginTop: "20px", marginBottom: "40px", backgroundColor: "black"}}>
          <ReactPlayer className="project-video" url='https://vimeo.com/251272588' width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>25 Hours in Shikoku</h1>
          <h6>Short Film</h6>

          <p>We focus on Pascal Viout, a French art director based in Tokyo.
          His passion is cycling and he has ever gone across Italy to Norway in the last summer.
          This time we let him move on bike from Kochi prefecture to Ehime prefecture in Shikoku in
          25 hours, making a stop to visit the famous Chikurinji-temple in Kochi city or the Shikoku
          caldera at the both prefecture’s frontier. Recharge your energy by taking a meal of genuine
          Japanese plates at Amekaze Shokudo. Make sure also if your bike can still hit the road.
          Mr. Toshihiro Yamane is an expert of bikes and your eyes will shine in his store if you’re a
          bike lover. After some hundreds kilometers we find him again in his marvelous hotel Setouchi
          Aonagi in Matsuyama city – designed by Tadao Ando – which offers the spectacular swimming pool
          in the mountains.</p>

        </div>

        <ImageLoader source={penshikoku1} ratio="r169"/>

        <ImageLoader source={penshikoku2} ratio="r169"/>

        <ImageLoader source={penshikoku3} ratio="r169"/>

        <ImageLoader source={penshikoku4} ratio="r169"/>

        <ImageLoader source={penshikoku5} ratio="r169"/>

        <ImageLoader source={penshikoku6} ratio="r169"/>

        <ImageLoader source={penshikoku7} ratio="r169"/>

        <ImageLoader source={penshikoku8} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Nao Yoshigai" url="http://naoyoshigai.com/"/>
              <Credits title="Creative Direction" name="Benoit Piquet" url="https://www.wantedly.com/users/54897331"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="Production Coordinator" name="Mari Okazaki" />
              <Credits title="Biker" name="Pascal Viout" url="https://www.canvas.co.com/creatives/pascal-viout"/>
              <Credits title="Production" name="Des Quatre" url="http://www.des-quatre.com/"/>
              <Credits title="Post Production" name="D-Fuze" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://pen-online.com/film/pascal-viout/" title="Pen Magazine International"/>
        </div>
      </div>
    )
  }
}

export default PenShikoku