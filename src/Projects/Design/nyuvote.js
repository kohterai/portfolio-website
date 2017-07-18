import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import nyuvote1 from './nyuvote-1.jpg'
import nyuvote2 from './nyuvote-2.jpg'
import nyuvote3 from './nyuvote-3.jpg'
import nyuvote4 from './nyuvote-4.jpg'
import nyuvote5 from './nyuvote-5.jpg'

import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class NYUVote extends Component {
  render() {
    return (
      <div className="project-content">
        <img src={nyuvote1} className="full"/>

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
        
        <img src={nyuvote4} className="full"/>
        
        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Responsive</h2>
            <p>The app was designed mobile first to accommodate high volumes of
            students voting through mobile devices. NYU Vote is built with a responsive
            design and runs seamlessly across tablets, mobile, and desktop computers.</p>
          </div>
        </div>
        
        <img src={nyuvote3} className="full"/>
        <img src={nyuvote2} className="full"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Process Flow</h2>
            <p>Extra emphasis was put into making the casting of the ballots as
            unambiguous as possible. The changing prompts and colors of the progress
            bar button were used to guide the user through process.</p>
          </div>
        </div>

        <img src={nyuvote5} className="full"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Lead Engineer" name="Lingliang Zhang" />
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