import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import nyuvote1 from './photos/nyuvote-1.jpg'
import nyuvote2 from './photos/nyuvote-2.jpg'
import nyuvote3 from './photos/nyuvote-3.jpg'
import nyuvote4 from './photos/nyuvote-4.jpg'
import nyuvote5 from './photos/nyuvote-5.jpg'

import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import ImageLoader from '../ImageLoader'


class NYUVote extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={nyuvote1} />

        <div className="text-container">
          <h1>NYU Vote</h1>
          <h6>Official NYU Voting Platform</h6>
          <p>NYU Vote is an open source live voting platform designed to be the union of capability
          and simplicity. It has an ultra simple user-facing ballot interface, as well as a
          minimalistic admin panel. The target audience was 20,000 students from NYU New York,
          NYU Abu Dhabi, and NYU Shanghai.</p>

          <div className = "text-paragraphs">
            <h2>Concept</h2>
            <p>NYU Vote was initially created for the NYU Student Government in New York. The
            web app needed to be mobile friendly and also run on iPads and laptops provided
            by the student government for the elections.</p>

            <p>Clarity in design was a requirement so there were no ambiguity for the voters.
            Students are often on a tight schedule. The interface was also kept minimalistic
            to get students through the ballots as quick as possible.</p>
          </div>
        </div>
        
        <ImageLoader source={nyuvote4} />
        
        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Responsive</h2>
            <p>The app was designed mobile first to accommodate high volumes of
            students voting through mobile devices. NYU Vote is built with a responsive
            design and runs seamlessly across tablets, mobile, and desktop computers.</p>
          </div>
        </div>
        
        <ImageLoader source={nyuvote3} />
        <ImageLoader source={nyuvote2} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Process Flow</h2>
            <p>Extra emphasis was put into making the casting of the ballots as
            unambiguous as possible. The changing prompts and colors of the progress
            bar button were used to guide the user through process.</p>
          </div>
        </div>

        <ImageLoader source={nyuvote5} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Lead Engineer" name="Ling Zhang" />
              <Credits title="Design/Front-end" name="Koh Terai" />
              <Credits title="Technical Support" name="Moiri Gamboni" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://studentvote.nyu.edu/" title="Visit Website"/>
          <BigButton color="black" textColor="white" url="https://github.com/hackAD/nyu-vote" title="Code Base"/>
        </div>
      </div>
    )
  }
}

export default NYUVote