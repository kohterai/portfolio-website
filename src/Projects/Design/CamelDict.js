import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Credits from '../Credits';
import BigButton from '../BigButton';
import ReactPlayer from 'react-player'

import cameldict1 from './photos/cameldict-1.jpg'
import cameldict2 from './photos/cameldict-2.jpg'
import cameldict3 from './photos/cameldict-3.jpg'
import cameldict4 from './photos/cameldict-4.jpg'



import ImageLoader from '../ImageLoader'

class CamelDict extends Component {
  render() {
    return (
      <div className="project-content">
        <ImageLoader source={cameldict2} />

        <div className="text-container">
          <h1>Camel Dictionary</h1>
          <h6>Minimalist Dictionary for Arabic Learners</h6>

          <p>Camel Dictionary is a minimalistic dictionary tailored for
          students of the Arabic language. The dictionary attempts to bring
          a fast, offline dictionary experience that can be searched typing in Arabic
          as well as in English as a transliteration of Arabic words. Camel Dictionary is
          still a conceptual product.</p>

        <div className = "text-paragraphs">
          <h2>Competitors</h2>
          <p>
          There are several existing arabic dictionaries but they are not tailored for elementary, and intermediate
          students of arabic. Great minimalistic dictionaries are available in other languages such
          as <a target="_blank" href="http://jisho.org/">Jisho</a> and <a target="_blank" href="http://tangorin.com/">Tangorin</a> for Japanese
          and <a target="_blank" href="https://www.pleco.com">Pleco</a> and <a target="_blank" href="https://play.google.com/store/apps/details?id=com.embermitre.hanping.app.lite&hl=en">Hanping</a> for Chinese.
          Arabic dictionaries tend to be slow, hard to search correctly, and difficult to digest.
          </p>
          </div>
        </div>


        <ImageLoader source={cameldict4} />

        <div className="text-container">
          <div className = "text-paragraphs">
            <h2>Interaction</h2>
            <p>The two pane interface for desktop and tablets can be easily converted for mobile. Individual words can be
            marked with tags such as "common", "old", "new"  to help language learners understand their significance.</p>
          
            <p>The search textbox can take Arabic and English inputs. Matched words update instantaneously on the screen.
            When the search query is in English, the transliteration of words get displayed above the Arabic text. When 
            the search query is in Arabic, the Arabic text is displayed above the English transliteration.</p>

            <p>Since Arabic text flows from right to left, when the query is in Arabic, the result words are displayed right aligned.</p>

          </div>
        </div>
        <ImageLoader source={cameldict3} />

        <ImageLoader source={cameldict1} />

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

export default CamelDict