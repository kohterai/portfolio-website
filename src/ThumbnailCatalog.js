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
          <div key={projectList.type} className="thumb-category-wrapper">
            <div className="thumbnailCategoryTitle" style={{
              textTransform: 'uppercase',
              fontWeight: '600',
              fontSize: '1.2em'}}>
              <div id={projectList.type}>{projectList.type}</div>
            </div>
            <div className="thumbnailContainer" style={{
              display: '-webkit-box',
              display: '-moz-box',
              display: '-ms-flexbox',
              display: '-webkit-flex',
              display: 'flex',
              flexWrap: 'wrap'}}>
            {projectList.projects.map((project, index) => (
                <Thumbnail  key={project.title}
                            title={project.title}
                            caption={project.caption}
                            thumbnail={project.thumbnail}
                            path={project.path}/>
            ))}
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default ThumbnailCatalog