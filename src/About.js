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
          <h6>Difference </h6>

          <p>St. Marys International School Tokyo</p>
          <p>Track and Field Captain</p>
          <p>Cross Country Captain</p>
          <p>Student Council President</p>

          <p>New York University Abu Dhabi</p>
          <p>B.S. Computer Science</p>
          <p>The Gazelle Design Director</p>

        </div>
      </div>
    )
  }
}

export default About