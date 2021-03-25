import React, { Component } from 'react';
import {
} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import ThumbnailLong from './ThumbnailLong'
import projectList from './ProjectList'
import ReactPlayer from 'react-player'
import $ from 'jquery'
import Waypoint from 'react-waypoint'


class 
ThumbnailCatalog extends Component {

  // onUnload = e => { // the method that will be used for both add and remove event
  //   // e.preventDefault();
  //   // e.returnValue = '';
  //   console.log("coming in here");
  //   localStorage.removeItem('token');
  //   return '';
  // }

  // componentDidMount() {
  //     window.addEventListener("beforeunload", this.onUnload);
  // }

  // componentWillUnmount() {
  //     window.removeEventListener("beforeunload", this.onUnload);
  // }

  _enterSection(msg) {

    // While window is scrolling from click on menu, dont activate titles inbetween
    if ($("#menu-ball").hasClass("scrolling") == false) {
      $(".menu-title-a").each(function() {
        $(this).removeClass("active")
      });
      $(".menu-title").each(function() {
        $(this).removeClass("active-title")
      });
      $(`#menu-title-a-${msg}`).addClass("active")
      $(`#menu-title-${msg}`).addClass("active-title")
      var ballPos = $(`#menu-title-a-${msg}`).position().top + 61
      $("#menu-ball").css({marginTop: ballPos})
    }
  }

  render() {
    return (
      <div>
        {projectList.map((projectList, index) => (

          <div key={projectList.type} className="thumb-category-wrapper">
                      <Waypoint
            onEnter={this._enterSection.bind(this, `${projectList.type}`)}
            bottomOffset='40%'
            // onLeave={this._leaveSection.bind(this, `${projectList.type}`)}
          >
            <div className="thumbnailCategoryTitle" style={{
              fontWeight: '600',
              fontSize: '1.2em'}}>
              <div style={{marginTop: "30px", marginLeft: "4px"}} id={projectList.type}>{projectList.type}</div>
            </div>
            </Waypoint>


            {projectList.longThumb ? (
              <div>
              {/* <div className="project-video-wrapper" style={{marginTop: "20px", marginBottom: "40px", backgroundColor: "black"}}>
                <ReactPlayer className="project-video" url='https://vimeo.com/201632847' width='100%' height='100%'/>
              </div> */}
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