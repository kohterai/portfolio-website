import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import bh1 from './photos/beritaharian-1.jpg'
import bh2 from './photos/beritaharian-2.jpg'
import bh3 from './photos/beritaharian-3.jpg'

import mlady3 from './photos/mlady-3.jpg'
import mlady4 from './photos/mlady-4.jpg'
import mlady5 from './photos/mlady-5.jpg'
import mlady6 from './photos/mlady-6.jpg'
import mlady7 from './photos/mlady-7.jpg'
import mlady8 from './photos/mlady-8.jpg'


import ImageLoader from '../ImageLoader'

class BeritaHarian extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={bh2} />

        <div className="text-container">
          <h1>Berita Harian</h1>
          <h6>Newspaper Redesign</h6>

          <p>During my time at Agency, I worked as an interaction designer on a project to redesign Berita Harian, Singapore's largest Malay newspaper.
          </p>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Research</h2>
            <p>
              I put together sacrificial concepts and conducted research to understand reader's behaviours around the newspaper, and how we could redesign the web experience for the Malay community.
            </p>
            </div>
          </div>
        <ImageLoader source={bh3} />



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Outcome</h2>
            <p>
              As an interaction designer, I redesigned their entire navigational structure, information architecture, comments section, search, and filtering mechanism.
            </p>
          </div>
        </div>
        <ImageLoader source={bh1} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Team</h2>
            <div className="credit-wrapper">
              <Credits title="Design Lead" name="Alistair Norris" />
              <Credits title="Interaction Design" name="Koh Terai" />
              <Credits title="Design Researcher" name="Caroline Chan" />
              <Credits title="Staff UX Designer" name="Charmaine Martin" />
              <Credits title="Communication Design" name="Mariani Manjamahad" />
            </div>
          </div>
        </div>

        {/* <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://github.com/kohterai/Audiloid" title="View Code"/>
        </div> */}
      </div>
    )
  }
}

export default BeritaHarian