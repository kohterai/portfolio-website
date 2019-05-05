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

import pearfang1 from './photos/pearfang-1.jpg'
import pearfang2 from './photos/pearfang-2.jpg'
import pearfang3 from './photos/pearfang-3.jpg'
import pearfang4 from './photos/pearfang-4.jpg'
import pearfang5 from './photos/pearfang-5.jpg'
import pearfang6 from './photos/pearfang-6.jpg'
import pearfang7 from './photos/pearfang-7.jpg'
import pearfang8 from './photos/pearfang-8.jpg'
import pearfang9 from './photos/pearfang-9.jpg'
import pearfang10 from './photos/pearfang-10.jpg'
import pearfang11 from './photos/pearfang-11.jpg'
import pearfang12 from './photos/pearfang-12.jpg'
import pearfang13 from './photos/pearfang-13.jpg'
import pearfang14 from './photos/pearfang-14.jpg'
import pearfang15 from './photos/pearfang-15.jpg'
import pearfang16 from './photos/pearfang-16.jpg'
import pearfang17 from './photos/pearfang-17.jpg'

import ImageLoader from '../ImageLoader'


class Pear extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper" style={{marginTop: "10px", marginBottom: "40px", backgroundColor: "white"}}>
          <ReactPlayer className="project-video" url='https://vimeo.com/308238873' width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>A Fang and a Pear's Journey</h1>
          <h6>Short Film</h6>

          <p>Ayano lives in a city. When she finds a pear in her room, not knowing where it came from, she names it "Tamako".
          Meanwhile, in the countryside surrounded by nature, a pearfarmer Satoko notices that one of the pears has been stolen from the farm. Next to where the pear used to be, there is a bloody fang.</p>
          <p><i>A Fang and a Pear's Journey</i> premiered at Kyoto International Film Festival</p>
        </div>


        <ImageLoader source={pearfang1} ratio="r169"/>

        <ImageLoader source={pearfang2} ratio="r169"/>

        <ImageLoader source={pearfang3} ratio="r169"/>

        <ImageLoader source={pearfang4} ratio="r169"/>

        <ImageLoader source={pearfang5} ratio="r169"/>

        <ImageLoader source={pearfang6} ratio="r169"/>

        <ImageLoader source={pearfang7} ratio="r169"/>

        <ImageLoader source={pearfang9} ratio="r169"/>

        <ImageLoader source={pearfang10} ratio="r169"/>

        <ImageLoader source={pearfang11} ratio="r169"/>

        <ImageLoader source={pearfang12} ratio="r169"/>

        <ImageLoader source={pearfang13} ratio="r169"/>

        <ImageLoader source={pearfang14} ratio="r169"/>

        <ImageLoader source={pearfang15} ratio="r169"/>

        <ImageLoader source={pearfang16} ratio="r169"/>

        <ImageLoader source={pearfang17} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Nao Yoshigai" url="http://naoyoshigai.com/"/>
              <Credits title="Producer" name="Sakamoto Naohiko" url="http://www.yoshimoto.co.jp/"/>
              <Credits title="Producer" name="Go Komaki" url="http://4-3-3.co.jp/"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="1st AC" name="Seki Rui" />
              <Credits title="2nd AC" name="Amon Ryu" />
              <Credits title="Gaffer" name="Kato Daiki" url="http://picpot.net/kato.html" />
              <Credits title="Production Designer" name="Kato Koyuki" />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Pear
