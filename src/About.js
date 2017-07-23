import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import CV from './KohTerai-2017CV-JE.pdf'


class About extends Component {
  render() {
    return (
      <div id="footer">
        <div style={{textAlign: "center", color: "#a3a3a3", fontWeight: "300"}}>
                    <Link to="/about">
                      about
                    </Link>
                    &nbsp;&nbsp;&sdot;&nbsp;&nbsp;
                    <a target="_blank" href={CV}>CV</a>
                    &nbsp;&nbsp;&sdot;&nbsp;&nbsp;
                    <a href="mailto:koh.terai@gmail.com?Subject=Hello" target="_top">contact</a>

        </div>
      </div>
    )
  }
}

export default About