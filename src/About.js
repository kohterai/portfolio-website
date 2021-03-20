import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import portrait from './photos/koh-6.jpg'
import ImageLoader from './Projects/ImageLoader'


class About extends Component {
  render() {
    return (
      <div id="about">
        <div style={{textAlign: 'left'}} className="text-container">
          <div>
            <div style={{width: '100%'}}>
              <h1 style={{fontSize:'1.5em', paddingTop: 50, marginTop: 10, marginBottom: 5, fontWeight: 600}}>
                Hello, I'm Koh
              </h1>
              <h1 style={{fontSize:'1.5em',  marginTop: 5, marginBottom: 10, fontWeight: 300}}>
                I design <span style={{fontWeight: 700, color: "#F5AC1F"}}>products</span> and <span style={{fontWeight: 700, color: "#F5AC1F"}}>services</span>
              </h1>
              {/* <img style={{width: '100%'}} src={portrait} /> */}
            </div>
            <div className="project-content">
              <ImageLoader source={portrait} />
            </div>
            <div>
              <p style={{fontSize: '0.8em'}}>I strive to bring beauty and excellence to my work.</p>
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
