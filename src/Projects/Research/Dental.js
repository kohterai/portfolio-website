import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import dental1 from './photos/dental-1.jpg'
import dental2 from './photos/dental-2.jpg'
import dental3 from './photos/dental-3.jpg'

import BackgroundImage from 'react-background-image-loader';
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import ImageLoader from '../ImageLoader'

// <BackgroundImage src={audio1} placeholder={preload} className="bg-image"/>

class dental extends Component {
  render() {
    return (
      <div className="project-content">

        <div className="project-video-wrapper">
          <ReactPlayer className="project-video" url='https://youtu.be/BX9AQsFW-8w' controls={true}
          youtubeConfig={{modestbranding: 1}} width='100%' height='100%'/>
        </div>

        <div className="text-container">
          <h1>Haptic-Based Simulator for Periodontal Training</h1>
          <h6>Development for NYU Abu Dhabi Applied Interactive Media Lab</h6>

          <p>I was in charge of designing and developing a prototype dental haptic simulator at NYU Abu Dhabi's
          Applied Interactive Media Lab in collaboration with the NYU College of Dentistry.</p>

          <div className = "text-paragraphs">
            <h2>Concept</h2>
            <p>The Haptics-based virtual reality periodontal training simulation project focuses upon
            the research, development, and evaluation of a simulator for training of periodontal
            procedures for dental students/clinicians. Using virtual reality and Haptics technologies,
            the periodontal simulator allows trainees to learn performing diagnosis and/or treatment
            procedures of periodontal diseases by visualizing a 3D virtual human mouth and feeling
            physical tactile sensations as they touch the surface of teeth, gingiva, bone and calculi
            via virtual dental instruments. In a periodontal procedure, the dentist depends primarily
            on tactile sensations to perform diagnostic and surgical tasks, therefore, the use of
            Haptics in unquestionably crucial for a realistic periodontal simulation.</p>


          </div>
        </div>

        <ImageLoader source={dental1} ratio="r235" />


        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Technology and Features</h2>
            <p>The prototype was developed using the H3D API and Geomagic Touch. The Geomagic Touch
            was one of the most affordable haptic devices that allow 6 degrees of freedom. The prototype was
            developed in Python with 3D models modified in 3ds Max.</p>

            <p>Transparency toggles, view toggles, tool swapping, as well as haptic recording and playback features have been
            implemented to help dental students learn calculus removal processes.</p>

            <p>Haptic recording allows students and instructors
            to record their movements during the calculus removal procedure. These hapic recordings are stored
            as force and position data which can be played back. The playback feature allows instructors to review student's work as
            well as student's to learn from instructor's sample procedures.
            Visual representation of the playback is given a red transparent guiding dental pick.</p>
          </div>
        </div>
      
        <ImageLoader source={dental2} ratio="r235" />
        <ImageLoader source={dental3} ratio="r235" />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Principal Investigator" name="Mohamad Eid" url="https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/mohamad-eid.html" />
              <Credits title="Mentor" name="George Karafotias" url="https://wp.nyu.edu/aimlab/research_team/research_engineers/" />
              <Credits title="Software/Design" name="Koh Terai" />
            </div>
          </div>
        </div>

        <div className="big-button-wrapper">
          <BigButton color="black" textColor="white" url="https://wp.nyu.edu/aimlab/research_projects/haptic_simulator/" title="Project Website"/>
          <BigButton color="black" textColor="white" url="https://wp.nyu.edu/aimlab/" title="Lab Website"/>
        </div>
      </div>
    )
  }
}

export default dental