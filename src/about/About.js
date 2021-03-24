import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import portrait from '../photos/koh-6.jpg'
import ImageLoader from '../Projects/ImageLoader'
import TitleLine from './components/TitleLine'

import './About.css'

class About extends Component {
  render() {
    return (
      <div id="about">
        <div style={{ textAlign: 'left' }} className="text-container">
          <div>
            <div style={{ width: '100%' }}>
              <h1 id="about-header" style={{ fontSize: '1.5em', marginTop: 10, marginBottom: 5, fontWeight: 600 }}>
                Hello, I'm Koh
              </h1>
              <h2 style={{ fontSize: '1.0em', marginTop: 5, marginBottom: 10, fontWeight: 300, color: "#a3a3a3" }}>
                {/* I design <span style={{ fontWeight: 700, color: "#F5AC1F" }}>products</span> and <span style={{ fontWeight: 700, color: "#F5AC1F" }}>services</span> */}
                I design products and services
              </h2>
              {/* <img style={{width: '100%'}} src={portrait} /> */}
            </div>
            <div className="project-content">
              <ImageLoader source={portrait} />
              <div className="flex-grid">
                {/* Left Col */}
                <div style={{marginTop: '0px'}} className="text-paragraphs">
                  <h2>About</h2>
                  <p><em>I care deeply about beauty</em><br></br>Getting the rythm, balance, and tempo to the pixel (or millimeter) and or the milisecond (or frame) is important. I believe this is what separates good from excellence.</p>
                  <p><em>I care deeply about intention</em><br></br>I feel responsible as a designer to ensure that what gets created fits positively into the lives of who we are creating for. This means having a nuanced understanding of users and their context. I believe that every design decision has an impact on the product and the user's life, and on society. I try to be aware of the consequences of my decisions.</p>
                  <p><em>I care deeply about the final delivery</em><br></br>Unrealistic (unshippable) design is not very useful in a production environment. As a designer I believe an understanding of code and regulations is important to have a clear understanding of constraints (technical and regulatory) from the getgo.</p>
                  {/* <p><em>I care deeply about building things that matter.</em><br></br></p> */}

                </div>
                <div style={{marginTop: '0px'}} className="text-paragraphs">
                  <div className="about-section-group">
                    <h2>Education</h2>
                    <TitleLine url="https://nyuad.nyu.edu/en/" name="New York University Abu Dhabi" title="B.S. Computer Science" date="2017 - 2018" />
                  </div>

                  <div className="about-section-group">
                    <h2>Work</h2>
                    <TitleLine url="https://gojo.co/" name="Gojo &amp; Co." title="Product Designer" date="2020 - Now" />
                    <TitleLine url="https://www.designingagency.com/" name="Agency" title="Interaction Designer" date="2018 - 2019" />
                    <TitleLine url="https://kohterai.com" name="Freelance" title="Design Technologist" date="2017 - 2018" />
                    <TitleLine url="https://www.takram.com/" name="Takram" title="Design Engineering Intern" date="Summer 2016" />
                    <TitleLine url="https://www.oliverwyman.com/" name="Oliver Wyman" title="Consulting Intern" date="Summer 2015" />
                  </div>

                  <div className="about-section-group">
                    <h2>Ongoing</h2>
                    <TitleLine name="Mobile Banking in Sri Lanka" title="Product Design" date="November 2020 - Now" />
                    <TitleLine name="Prototyping the Future of Diabetes Care in Singapore" title="Design Technologist" date="Janurary 2021 - Now" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// <img style={{height: '300px', width: '300px', marginTop: '50px'}} src={portrait1} />


export default About


          // <div className="resumeItem">
          //   <div className="resumeItemTitle">New York University Abu Dhabi</div>
          //   <div className="resumeItemCaption">Class of 2017 - Computer Science with a concentration in Economics</div>
          // </div>

          // <div className="resumeItem">
          //   <div className="resumeItemTitle">St. Marys International School, Tokyo</div>
          //   <div className="resumeItemCaption">Graduated as a part of Class of 2013</div>
          // </div>

          //           <h2>Resume</h2>
          // <p style={{fontSize: '0.8em'}}>I am a graduate of <a target="_blank" href="https://nyuad.nyu.edu">NYU Abu Dhabi</a> in Computer Science with a concentration in Economics.</p>
          // <p style={{fontSize: '0.8em'}}>I've interned at Oliver Wyman and Takram Design Engineering</p>
          // <p style={{fontSize: '0.8em'}}>I've shot films and photographs in the desert, in the snow, in the forest, in the rain, and on the water.</p>
