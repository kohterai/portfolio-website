import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import CV from './KohTerai-2017CV-JE.pdf'
import portrait3 from './photos/portrait3.jpg'
import portrait1 from './photos/rescue-0.jpg'



import ImageLoader from './Projects/ImageLoader'


class About extends Component {
  render() {
    return (
      <div id="about">
        <div style={{textAlign: 'center'}} className="text-container">
          <div>
            <div style={{minHeight: '500px', height:'500px', width: '100%'}}>
              <ImageLoader source={portrait1} />
            </div>
            <div>
              <p style={{fontSize: '0.8em', fontWeight: '600'}}>I’m currently a freelance designer and visual storyteller.</p>
              <p style={{fontSize: '0.8em'}}>I graduated <a href="https://nyuad.nyu.edu/en/">NYU Abu Dhabi</a> in 2017.</p>

              <p style={{fontSize: '0.8em'}}>I always strive to bring beauty and excellence to my work.</p>

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
