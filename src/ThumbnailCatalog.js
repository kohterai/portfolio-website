import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Thumbnail from './Thumbnail'

class ThumbnailCatalog extends Component {
  render() {
    return (
      <div>
        <Thumbnail title="Snake" />
      </div>
    )
  }
}

export default ThumbnailCatalog