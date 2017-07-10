import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import projectList from './ProjectList'



class ThumbnailCatalog extends Component {
  render() {
    return (
      <div>
        {projectList.map((projectList, index) => (
          <div>
            <h1>{projectList.type}</h1>
            {projectList.projects.map((project, index) => (
                <Thumbnail title={project.title} caption={project.caption} />
            ))}
          </div>
        ))}

      </div>
    )
  }
}

export default ThumbnailCatalog