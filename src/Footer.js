import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import CV from './KohTerai-2017CV-JE.pdf'


class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div style={{textAlign: "center", color: "#a3a3a3", fontWeight: "300"}}>
                    <Link to="/about">
                      about
                    </Link>
                    &nbsp;&nbsp;-&nbsp;&nbsp;
                    <a href="mailto:koh.terai@gmail.com?Subject=Hello" target="_top">koh.terai@gmail.com</a>

                    &nbsp;&nbsp;-&nbsp;&nbsp;
                    <a target="_blank" href={CV}>CV</a>

        </div>
      </div>
    )
  }
}

export default Footer