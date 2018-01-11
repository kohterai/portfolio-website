import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import architect1 from './photos/Architect-1.jpg'
import architect2 from './photos/Architect-2.jpg'
import architect3 from './photos/Architect-3.jpg'
import architect4 from './photos/Architect-4.jpg'
import architect5 from './photos/Architect-5.jpg'
import architect6 from './photos/Architect-6.jpg'


import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import ImageLoader from '../ImageLoader'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class architect extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={architect1} />

        <div className="text-container">
          <h1>Architecture</h1>
          <h6>Architectural Design</h6>
          <p>Here are some of the projects that I produced in High School in my visual arts class.
          All projects have been modeled in 3D using SketchUp and produced physically using styrofoam.</p>

          <div className = "text-paragraphs">
            <h2>Maritime Admissions Office</h2>
            <p>This building was designed imagining a new admissions building for a maritime university in New York. The university
            itself is built around a pentagon structure. The admissions office was built using their
            pentagon shape as the main shape. Windows were built imagining portholes on ships.</p>

            <p>
            The building is a two-story structure with the top floor being for presentations and special lectures for guests.
            The bottom floor is a general office space.
            </p>
          </div>
        </div>

        <ImageLoader source={architect3} />
        <ImageLoader source={architect2} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Residential Bulding</h2>
            <p>A three story residential building was built next to a hill. By utilizing
            the unique landscape, the house has two entrances, one on the ground floor and
            another on the third floor. The cantilevered deck gives the residents large
            balcony spaces. Black accents for the windows and edges for roofs added to
            maximize contrast between the white walls.</p>

            <p>The play between positive and negative spaces were inspired
            by <a href="https://www.archdaily.com/48096/plus-mount-fuji-architects-studio" target="_blank">Plus</a> and <a href="https://www.archdaily.com/475430/yotsubako-mount-fuji-architects-studio-taisei-design-planners-architects" target="_blank">
            Yotsubako</a> by <a href="http://fuji-studio.jp/" target="_blank">Mount Fuji Architects Studio</a>.</p>
          </div>
        </div>

        <ImageLoader source={architect5} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Lakeside Cottage</h2>
            <p>This cottage was designed for the shores of Lake Chautauqua, New York.
            The A-frame cottage was built with the heavy winter snows of Upstate New York in mind.</p>
          </div>
        </div>

        <ImageLoader source={architect6} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Fashion Retail Store</h2>
            <p>Here is a concept for a flagship fashion retail store.
            Large windows were built to let in lots of natural light.</p>
          </div>
        </div>
        

        <ImageLoader source={architect4} />

      </div>
    )
  }
}

export default architect