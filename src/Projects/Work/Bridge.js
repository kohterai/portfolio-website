import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import bridge1 from './photos/bridge-1.jpg'
import bridge2 from './photos/bridge-2.jpg'
import bridge3 from './photos/bridge-3.jpg'
import bridge4 from './photos/bridge-4.jpg'
import bridge5 from './photos/bridge-5.jpg'
import bridge6 from './photos/bridge-6.jpg'
import bridge7 from './photos/bridge-7.jpg'
import bridge8 from './photos/bridge-8.jpg'



import ImageLoader from '../ImageLoader'

class Bridge extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={bridge1} />

        <div className="text-container">
          <h1>Bridge</h1>
          <h6>Loan Management Tablet App</h6>

          <p>I led the product design for a Tablet App for processing loans for a Microfinance company in Myanmar. Prior to the tablet App, all of the
            loan officers processed the applications with pen and paper. The App attempts to make managing loans and customers faster and easier than ever.
          </p>
        </div>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Remote Research</h2>
            <p>
              Unfortunately due to the Covid and political situation, we were unable to conduct in-person interviews locally. Instead, we conducted a series of interviews over zoom.
              I also hired a local UX researcher in Myanmar to be our local ears and eyes for the product.
            </p>
            </div>
          </div>
        <ImageLoader source={bridge8} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Analogous Field Research</h2>
            <p>
              As a replacement for in-person research in Myanmar, I spent one-week shadowing loan officers in Cambodia, to at least get a general understanding of what the lives and behaviors around loan officers are. These shadowing activities were documented on the video to share with the rest of the team.
            </p>
            </div>
          </div>
        <ImageLoader source={bridge7} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Customer Management</h2>
            <p>
              Traditionally loan management tools in the market adopt a loan-first navigation flow. Instead, to help field officers think more in terms of customer management,
              we adopted a client-first navigational flow for our App.
            </p>
          </div>
        </div>
        <ImageLoader source={bridge6} ratio="r169" />


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Power Input</h2>
            <p>
            Loan officers spend the bulk of their time collecting information from users and inputting information into forms.
            The user experience for traditional form input has significant problems because the fields jump around, and the distance between the keyboard and the fields causes a lot of movement of the eye making the process incredible strenuous.
            In addition, oftentimes the customers may respond to questions in indirect ways that require officers to do basic arithmetic operations before they can be entered into the fields.
            </p>
            <p>
              The in-place keyboard allows arithmetic operations to be done in place, as well as the questions of the field appear right on top of the input, minimizing eye movement between the questions.            </p>
          </div>
        </div>

        <ImageLoader source={bridge3} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>State Management</h2>
            <p>
            Half of the complexity of the App comes from managing states. There is a complex mixture of states that need to be displayed to the user based on combinations of loan and customer states. I tried to design components in a way that allows a clear distinction to the user regarding the client, and can easily be extended to future components.
            </p>
          </div>
        </div>
        <ImageLoader source={bridge4} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Design System</h2>
            <p>
              The product was scheduled to also be deployed at Microfinance companies in Cambodia, Sri Lanka, and India, all with slightly different requirements. I kept all of the components as modular as possible so that the product manager could easily reconfigure the screens to prototype for future deployments.
            </p>
            <p>
              Figma released variants and improved their auto-align feature during the project, so I found myself "refactoring" my Figma files as I went along to make the best use of these newly released features.
            </p>
          </div>
        </div>

        <ImageLoader source={bridge5} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Team</h2>
            <div className="credit-wrapper">
              <Credits title="Product Manager" name="Marco Giancotti" />
              <Credits title="Product Design" name="Koh Terai" />
              <Credits title="Mobile Engineer" name="Jeet Dholakia" />
              <Credits title="Backend Engineer" name="Shridhar Hitnalli" />
              <Credits title="Backend Engineer" name="Mubaraka Bharucha" />
              <Credits title="Test Engineer" name="Sangita Agarwal" />
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

export default Bridge