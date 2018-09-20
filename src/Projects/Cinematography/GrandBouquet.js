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

import haptic1 from './photos/haptic-1.jpg'
import haptic2 from './photos/haptic-2.jpg'
import haptic3 from './photos/haptic-3.jpg'
import haptic4 from './photos/haptic-4.jpg'
import haptic5 from './photos/haptic-5.jpg'
import haptic6 from './photos/haptic-6.jpg'
import haptic7 from './photos/haptic-7.jpg'
import haptic8 from './photos/haptic-8.jpg'
import haptic9 from './photos/haptic-9.jpg'
import haptic10 from './photos/haptic-10.jpg'

import ImageLoader from '../ImageLoader'


class GrandBouquet extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper" style={{marginTop: "-20px", marginBottom: "-20px", backgroundColor: "white"}}>
          <ReactPlayer className="project-video" url='https://vimeo.com/275477101' width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>Grand Bouquet</h1>
          <h6>Haptic Film</h6>

          <p>Humans possess the ability to sympathize with other people through our own bodies’ pseudo-experience of their feelings. This enables us to imagine the joyful mood of a movie character, or share its troubles and pains. In addition to visuals and sound that rouse the viewer’s physical senses, this haptic movie contains elements that convey the protagonist’s emotions and resulting physical changes through vibrations in the chest, stomach and back – arguably the most direct form of sympathetic experience.</p>

          <p>Grand Bouquet is a short film that is viewed using a Haptic Device developed by Research Complex NTT R&D @ICC. The piece is being exhibited at the Intercommunication Center (ICC) in Tokyo.</p>

        </div>

        <ImageLoader source={haptic1} ratio="r235"/>

        <ImageLoader source={haptic2} ratio="r235"/>

        <ImageLoader source={haptic3} ratio="r235"/>

        <ImageLoader source={haptic4} ratio="r235"/>

        <ImageLoader source={haptic5} ratio="r235"/>

        <ImageLoader source={haptic6} ratio="r235"/>

        <ImageLoader source={haptic7} ratio="r235"/>

        <ImageLoader source={haptic8} ratio="r235"/>

        <ImageLoader source={haptic9} ratio="r235"/>

        <ImageLoader source={haptic10} ratio="r235"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Director" name="Nao Yoshigai" url="http://naoyoshigai.com/"/>
              <Credits title="Producer" name="Shinya Fujiwara" url="https://dotby.jp/"/>
              <Credits title="Producer" name="Go Komaki" url="http://4-3-3.co.jp/"/>
              <Credits title="Cinematography" name="Koh Terai" />
              <Credits title="1st AC" name="Gaetano Nino Campolongo" />
              <Credits title="2nd AC" name="Seki Rui" />
              <Credits title="Gaffer" name="Seiji Nakane" />
              <Credits title="Best Boy Electric" name="Satoshi Tani" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="http://www.ntticc.or.jp/en/archive/works/grand-bouquet/" title="Project Page (Full Credits)"/>
        </div>
      </div>
    )
  }
}

export default GrandBouquet
