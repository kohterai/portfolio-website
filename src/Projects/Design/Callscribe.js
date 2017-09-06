import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import callscribe1 from './photos/callscribe-1.jpg'
import callscribe2 from './photos/callscribe-2.jpg'
import callscribe3 from './photos/callscribe-3.jpg'
import callscribe4 from './photos/callscribe-4.jpg'

import ImageLoader from '../ImageLoader'

class Callscribe extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={callscribe1} />

        <div className="text-container">
          <h1>Callscribe</h1>
          <h6>Call Transcription and Recording App</h6>

          <p>Callscribe records all calls made through the app. The recordings are then
          transcribed and displayed as chat format. Each call is also summarized into a short sentence
          so that users can easily filter through past calls. The transcriptions can be searched
          and played back. Callscribe is still a conceptual product.</p>

        <div className = "text-paragraphs">
          <h2>UX Flow</h2>
          <p>Presenting audio call transcriptions as a chat conversation is a new concept.
          An intuitive UX flow had to be created to accomidate for the new interaction of searching, browsing, and
          playing back previous calls. Various UI from chat apps, audio recording apps, and phone apps, were combined
          to help create this new user experience.
          </p>
          </div>
        </div>

        <ImageLoader source={callscribe2} />
        
        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Playback and Call Logs</h2>
            <p>Transcripts from calls are displayed in chat format. When users scroll up from the default transcript screen,
            previous calls are displayed in collapsed format. Each call is indicated with its call date, duration, and call summary.
            </p>

            <p>When a specific section of the transcription is tapped, the audio recording of the call will playback from the selected position.
            The audio can be skipped to the previous and next line using the skip forwards and backwards buttons.
            </p>
          </div>
        </div>
        <ImageLoader source={callscribe3} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Search</h2>
            <p>Transcripts can be searched similar to generic chat and mail applications. Search results are
            displayed in green and black colors depending on who said the matched query (green for user themselves, and black for contact).
            </p>

            <p>When search results are tapped on, the corresponding section in the transcript will be displayed.
            Users can browse through search results by clicking on the arrow buttons. The audio recording can be played back
            by tapping sections of the transcription.
            </p>

          </div>
        </div>
        <ImageLoader source={callscribe4} />




        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Credits</h2>
            <div className="credit-wrapper">
              <Credits title="Concept/Lead Engineer" name="Ling Zhang" />
              <Credits title="Design" name="Koh Terai" />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Callscribe