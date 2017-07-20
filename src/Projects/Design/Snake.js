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


import hungrysnake1 from './photos/hungrysnake-1.jpg'
import hungrysnake2 from './photos/hungrysnake-2.jpg'
import hungrysnake3 from './photos/hungrysnake-3.jpg'

import ImageLoader from '../ImageLoader'


class Snake extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={hungrysnake1} />

        <div className="text-container">
          <h1>Hungry Snake</h1>
          <h6>Interactive Kinetic Sculpture</h6>

          <p>The hungry snake moves to wherever the icecream is. Users can use a keyboard
          to move the icecream in front of the snake. wherever the icecream goes, the snake moves to.</p>

        <div className = "text-paragraphs">
          <h2>Concept</h2>
          <p>This piece was built at the <a target="_blank" href="http://www.hardmood.info/lib/exe/detail.php?id=start&media=kinetic_sculptures_workshop_feld.jpg">Kinetic Sculpture Workshop</a> hosted
          by <a target="_blank" href="http://www.felix-beck.de">Felix Beck</a> and <a target="_blank" href="http://www.feld.is/">FELD studio Berlin</a>.
          We wanted to create a piece that could be cute and interactive that even children can enjoy.</p>
          </div>
        </div>

        <ImageLoader source={hungrysnake2} />

        <ImageLoader source={hungrysnake3} />

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://www.youtube.com/watch?v=wIFDw-clDmI' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Concept/Build" name="Jennifer Huang" />
              <Credits title="Concept/Code" name="Koh Terai" />
              <Credits title="Fader Box" name="FELD" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Snake