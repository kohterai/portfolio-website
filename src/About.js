import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import CV from './KohTerai-2017CV-JE.pdf'

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="text-container">
          <h1>Koh Terai</h1>
          <h6>St. Marys International School Tokyo '13</h6>
          <h6>New York University Abu Dhabi '17</h6>
          <h6>Contact: koh.terai@gmail.com</h6>
        </div>
      </div>
    )
  }
}

export default About