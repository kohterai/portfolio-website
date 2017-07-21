import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import triangles1 from './photos/triangles-1.jpg'
import triangles2 from './photos/triangles-2.jpg'
import triangles3 from './photos/triangles-3.jpg'
import triangles4 from './photos/triangles-4.jpg'
import triangles5 from './photos/triangles-5.jpg'
import triangles6 from './photos/triangles-6.jpg'
import triangles8 from './photos/triangles-8.jpg'


import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import ImageLoader from '../ImageLoader'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class Triangles extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={triangles8} />
      

        <div className="text-container">
          <h1>Triangles</h1>
          <h6>Wooden Sculpture</h6>
          <p>Triangles attempts to create a fluid structure out of the hard material of wood.
          The sculpture has been displayed at the Lobby of
          the <a href="http://www.nyuad-artscenter.org/">Arts Center</a> at NYU Abu Dhabi since Spring 2016. The sculpture is 120cm tall and 180cm wide.
          The sculpture is freestanding.</p>

          <div className = "text-paragraphs">
            <h2>Concept</h2>
            <p>The initial concept of the project came from the concept of repetitive shapes.
            The Wood Workshop at NYU Abu Dhabi had a large scale CNC Router capable of producing precise copies of
            distinct shapes. Each of the 9 triangles is derived from an identical triangle, but rotated and the 
            base cut off.</p>

          </div>
        </div>
        <ImageLoader source={triangles1} />
        
        <ImageLoader source={triangles2} />
        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Movement</h2>
            <p>The piece creates a sense of motion through rotation along 3 axis. First, each of the triangles rotate 
            counter clock-wise along the horizon. Second, the left base of the triangles are positioned to orbit around a
            fixed point on the ground. Third, the triangles lean in on each other. These rotations along three axis
            creates fluid motion out of a solid piece of work.</p> 
          </div>
        </div>
        

        <ImageLoader source={triangles3} />
        <ImageLoader source={triangles4} />
        <ImageLoader source={triangles5} />
        <ImageLoader source={triangles6} />
        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Concept & Build" name="Koh Terai" />
              <Credits title="Scene Shop" name="Andrew Riedemann" />
              <Credits title="Professor" name="Sandra Peters" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Triangles