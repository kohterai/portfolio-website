import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BackgroundImage from 'react-background-image-loader';
import ReactPlayer from 'react-player'

import Credits from '../Credits';
import BigButton from '../BigButton';

import workshop1 from './photos/workshop-1.jpg'
import workshop3 from './photos/workshop-3.jpg'
import workshop4 from './photos/workshop-4.jpg'
import workshop8 from './photos/workshop-8.jpg'
import workshop9 from './photos/workshop-9.jpg'
import workshop10 from './photos/workshop-10.jpg'
import workshop12 from './photos/workshop-12.jpg'
import workshop13 from './photos/workshop-13.jpg'
import workshop14 from './photos/workshop-14.jpg'
import workshop15 from './photos/workshop-15.jpg'

import ImageLoader from '../ImageLoader'


class CinematographyWorkshop extends Component {
  render() {
    return (
      <div className="project-content">

        <ImageLoader source={workshop1} />

        <div className="text-container">
          <h1>Cinematography Workshops</h1>
          <h6>Workshops at NYU Abu Dhabi</h6>

          <p>I organized and led a series of Tuesday night Cinematography workshops at NYU Abu Dhabi.
          At every workshop we attempted to recreate a scene from a particular movie. We would
          begin the workshops by disecting the scene, and look through supplementary material
          (American Cinematographer articles, BTS videos) to understand the techniques behind each setup.</p>

          <div className = "text-paragraphs">
            <h2>Inception</h2>
            <p>During our first workshop, we recreated the last dream sequence in Inception.
            We tried to recreate the lighting based on the eye light we see in the actual film.</p>
          </div>
        </div>

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/ZJbmMQp45JY' controls={true}
            youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>


        <ImageLoader source={workshop3} ratio="r235"/>

        <ImageLoader source={workshop4} ratio="r235"/>

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Blade Runner</h2>
            <p>For our Blade Runner workshop, we recreated the very first interrogation scene between
            Leon and Holden. Here, we worked with a hazer to add depth to our image, as well as working
            with a single source HMI as our key.</p>
          </div>
        </div>

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/br12LaTkZIc' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>


        <ImageLoader source={workshop8} ratio="r235"/>

        <ImageLoader source={workshop9} ratio="r235"/>

        <ImageLoader source={workshop10} ratio="r235"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Fight Club</h2>
            <p>Our theme for Fight Club was to work with a single source top light with different
            variations in shutter angle. We also worked on techniques for working with handheld shots.</p>
          </div>
        </div>

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/iKtyJqM6p4w' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <ImageLoader source={workshop12} ratio="r235"/>

        <ImageLoader source={workshop13} ratio="r235"/>


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Luxury Water</h2>
            <p>We did one workshop that focused on more commercial work with inanimate objects.
            We created a spec commercial for luxury water sold on campus.</p>
          </div>
        </div>

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/9Va_Dy177uY' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <ImageLoader source={workshop14} ratio="r235"/>

        <ImageLoader source={workshop15} />


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Equipment" name="NYUAD Equipment Center" />
              <Credits title="Sound Stage" name="Mhairhi Burton" />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CinematographyWorkshop