import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import projectList from './ProjectList'
import './menu.css';
import $ from 'jquery'
import MenuTitle from './MenuTitle'
import MenuProject from './MenuProject'


class Menu extends Component {

  render() {
    const { match, location, history } = this.props

    function handleClick(title) {
    }

    function displaySubmenu(path, projType) {
      var res = path.split("/")
      // len = 2 means we are on homepage
      if (res.length<3) {

        // On homepage, hide all sub menus
        for (let category of projectList) {
          for (let project of category.projects) {
              $(document).ready( function () {
                $(`#menu-${category.type}`).css({ "opacity": "0", "visibility": "hidden"})
                $(`#menu-title-${category.type}`).css({"margin-bottom": "0px"})
              })
            }
          }
          return "none"        
      } else {
        for (let category of projectList) {
          for (let project of category.projects) {
            if (project.path == path & category.type == projType) {
              $(document).ready( function () {
                // var subMenuSize = $(`#menu-${category.type}`).height()
                var subMenuSize = $(`#menu-${category.type}`).height()
                var subMenuLoc = $(`#menu-title-${category.type}`).position()
                $(`#menu-${category.type}`).css({ "opacity": "1", "visibility": "visible"})
                $(`#menu-title-${category.type}`).css({"margin-bottom": `${subMenuSize}px`})
                $(`#menu-${category.type}`).css({"top": `${subMenuLoc.top+160}px`})
              })
              return "block"
            }
          }
        }
      }
      return "none"
    }

    return (
      <div id="Menu" style={{ marginTop: '150px', position: 'fixed'}}>
          <Link to="/" style={{fontSize: '1.5em', fontWeight: '600', color: '#000000'}}>
            KOH TERAI
          </Link>
        <div style={{ listStyleType: 'none', padding: 0, marginTop: '50px' }}>
          {projectList.map((projectList, index) => (
            <div key={projectList.type}>
              <MenuTitle category={projectList.type} />
                <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
                  display: displaySubmenu(`${location.pathname}`, projectList.type)
                }}>
                {projectList.projects.map((project, index) => (
                  <MenuProject project={project.title} pathName={project.path}/>
                ))}
                </ul>
            </div>
          ))}
            <MenuTitle category="Cinematography" />
        </div>
      </div>
    )
  }
}

export default Menu