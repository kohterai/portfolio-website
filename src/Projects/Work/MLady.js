import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import mlady1 from './photos/mlady-1.jpg'
import mlady2 from './photos/mlady-2.jpg'
import mlady3 from './photos/mlady-3.jpg'
import mlady4 from './photos/mlady-4.jpg'
import mlady5 from './photos/mlady-5.jpg'
import mlady6 from './photos/mlady-6.jpg'
import mlady7 from './photos/mlady-7.jpg'
import mlady8 from './photos/mlady-8.jpg'
import mlady9 from './photos/mlady-9.jpg'
import mlady10 from './photos/mlady-10.jpg'
import mlady11 from './photos/mlady-11.jpg'
import mlady12 from './photos/mlady-12.jpg'
import mlady13 from './photos/mlady-13.jpg'
import mlady14 from './photos/mlady-15.jpg'
import mlady15 from './photos/mlady-14.jpg'





import ImageLoader from '../ImageLoader'

class MLady extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={mlady1} />

        <div className="text-container">
          <h1>M-Lady</h1>
          <h6>Agent Banking in Rural Cambodia</h6>

          <p>I helped design and launch an agent banking service in Rural Cambodia for small loans ($50~). I conducted design research to sharpen the service proposition and designed and built an App for the agents.
            The service is growing at over 20% per month and has provided over $100,000 in loans to villagers.</p>
          <p>
            I strived to design the clearest, most user-friendly, and hassle-free small loan product in Cambodia.
          </p>
        </div>

        <ImageLoader source={mlady7} />


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Research</h2>
            <p>
              At the beginning of the project, I led two-week research with the local staff to understand how an agent banking service could fit into the lives of our users. The outcome of this research was a 200-page insight deck regarding behaviors around saving and borrowing habits in the rural areas.
            </p>
            <p>
              We used this research to reframe the initial service proposition which was business-focused, to one which was grounded in the local context and customer needs.
            </p>
            <p>
              Based on the research we piloted four different models that provided a different angle to the loan product we were trying to offer.
              I designed four service models that emphasized different USPs to the customers (bespoke, official, infrastructural, casual).
            </p>
            </div>
          </div>
        <ImageLoader source={mlady15} ratio="r169"/>
        <ImageLoader source={mlady2} ratio="r169"/>




        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Shaping the Product</h2>
            <p>
              A big part of this project was creating an App that would enable loan processing in rural areas. To develop this App, I conducted a thorough process analysis, customer journey mapping, and dissected all of the systems in play. I created a tech stack that would enable us to start deploying the tool as soon as possible. I sketched sacrificial concepts to test and align with stakeholders.
            </p>
          </div>
        </div>
        <ImageLoader source={mlady10} />


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Reframing the App</h2>
            <p>
              A big moment in the project was when we redefined what the "App" is. Until this point, the team was simply thinking of the App as a data capturing tool.
              By reframing it as a tool "to be effective Ambassadors", I was able to help the team expand their imagination for what the tool could achieve.
            </p>
          </div>
        </div>
        <ImageLoader source={mlady11} ratio="r169" />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>App</h2>
            <p>To have the village agents process loans, I designed and built a Tablet App in Flutter. The users (agents) are novices to any kind of loan work, so the emphasis of the App was to guide the loan process as much as possible. This allows for training new agents within 2 hours and helps them navigate the highly regulated and complicated loan procedure with almost no experience.
            </p>
          </div>
        </div>

        {/* <ImageLoader source={mlady6} ratio="r169"/> */}
        <ImageLoader source={mlady5} ratio="r169"/>
        <ImageLoader source={mlady13} ratio="r169"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Physical Forms</h2>
            <p>The service also requires a lot of paperwork that cannot be digitized due to regulations.
              I redesigned all of the forms so that they are easy to fill and understand. We wanted to break the stereotype of loans being highly complicated.
            </p>
            <p>
            When the forms can be filled easily by the agents, the customers also feel at ease. The opposite is true that any friction the agents have with the tools that we give them, immediately translates to anxiety, or doubt to our customers. I firmly believed that well-designed forms were key to great service delivery.
            </p>
          </div>
        </div>

        <ImageLoader source={mlady3} ratio="r169"/>



        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Team</h2>
            <div className="credit-wrapper">
              <Credits title="Business Strategist" name="Tomohiro Isozaki" />
              <Credits title="Product Design" name="Koh Terai" />
              <Credits title="Project Manager" name="Kosal Sok" />
              <Credits title="Backend Engineer" name="Marco Giancotti" />
              <Credits title="Core Banking" name="Darith Khean" />


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

export default MLady