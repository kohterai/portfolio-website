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


import fluident1 from './photos/fluident-1.jpg'
import fluident2 from './photos/fluident-2.jpg'
import fluident3 from './photos/fluident-3.jpg'
import fluident4 from './photos/fluident-4.jpg'


import ImageLoader from '../ImageLoader'


class Fluident extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={fluident2} ratio="r169" />

        <div className="text-container">
          <h1>Fluident</h1>
          <h6>Branding for Dental Tech Startup</h6>

          <p>Fluident is a dental startup based in the US. They requested a logo, branding guidelines, and collateral to kickoff the launch for their first product.</p>

        </div>

      <div className="text-container">
        <div className="text-paragraphs">
          <h2>Logo Design</h2>
          <p>The logo went through studies and iterations experimenting on the motif of “f” and “infinity”. The final logo starts off the “f” as a series of dashes which gradually turn into a single solid piece at the arm of the “f”. This represents the company’s mission of streamlining various pieces of medical data into their centralized system.</p>
        </div>
      </div>

        <ImageLoader source={fluident3} />

      <div className="text-container">
        <div className="text-paragraphs">
          <h2>Branding Collateral</h2>
          <p>Business Cards and Letterheads were created. Both were designed so that they can accommodate various text lengths without having to redesign the templates.</p>
        </div>
      </div>

        <ImageLoader source={fluident4} />

        {/* <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Design" name="Koh Terai" />
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Fluident