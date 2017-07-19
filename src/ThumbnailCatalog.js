import React, { Component } from 'react';
import {
} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import ThumbnailLong from './ThumbnailLong'
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


            {projectList.longThumb ? (
              <div className="thumbnailContainer" style={{
                              display: 'flex',
                              flexWrap: 'wrap'}}>
                {projectList.projects.map((project, index) => (
                  <ThumbnailLong  key={project.title}
                              title={project.title}
                              caption={project.caption}
                              thumbnail1={project.thumbnail1}
                              thumbnail2={project.thumbnail2}
                              thumbnail3={project.thumbnail3}
                              path={project.path}/>
                ))}
              </div>
            ) : (
              <div className="thumbnailContainer" style={{
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
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default ThumbnailCatalog