import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BackgroundImage from 'react-background-image-loader';
import CV from './KohTerai-2017CV-JE.pdf'


class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div style={{textAlign: "center",
                    color:'#a3a3a3',
                    fontSize: '0.6em',
                    fontWeight: '300'}}>
                    <a style={{textDecoration: "none",
                    color:'#a3a3a3'}} href="mailto:koh.terai@gmail.com?Subject=Hello" target="_top">koh.terai@gmail.com </a>
                    - <a style={{textDecoration: "none",
                    color:'#a3a3a3'}} target="_blank" href={CV}>CV</a>
        </div>
      </div>
    )
  }
}

export default Footer