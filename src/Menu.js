import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import projectList from './ProjectList'
import './menu.css';
import $ from 'jquery'

class Menu extends Component {

  render() {
    const { match, location, history } = this.props

    function handleClick(title) {
    }

    function displaySubmenu(path, projType) {
      var res = path.split("/")
      // len = 2 means we are on homepage
      if (res.length<3) {
        return "none"        
      } else {
        for (let category of projectList) {
          for (let project of category.projects) {
            if (project.path == path & category.type == projType) {
              console.log(`menu-${category.type}`)
              $(document).ready( function () {
                $(`#menu-${category.type}`).addClass("activeSubMenu")
                var subMenuSize = $(`#menu-${category.type}`).height()
                console.log(subMenuSize)
                $(`#menu-title-${category.type}`).css({"margin-bottom": `${subMenuSize}px`})
                // $(`#menu-title-${category.type}`).animate({ marginBottom: `${subMenuSize}px`}, 1000);

                console.log(`#menu-title-${category.type}`)
              })
              return "block"
            } else {
              $(`#menu-${category.type}`).removeClass("activeSubMenu")
              $(`#menu-title-${category.type}`).css({"margin-bottom": "0px"})
            }
          }
        }        
      }
      return "none"
    }

    return (
      <div className="Menu" style={{
        marginTop: '50px',
        position: 'fixed'
      }}>
          <Link to="/" style={{
            fontSize: '1.5em',
            fontWeight: '600',
            color: '#000000'
        }}>
          KOH TERAI
          </Link>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projectList.map((projectList, index) => (
            <div key={projectList.type}>
              <li>
                <div id={`menu-title-${projectList.type}`} className="menu-title">
                  <Link  to={'/'} onClick={()=>handleClick(projectList.type)}>
                    {projectList.type}
                  </Link>
                </div>
                <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
                  display: displaySubmenu(`${location.pathname}`, projectList.type)
                }}>
                {projectList.projects.map((project, index) => (
                  <li key={`menu-item-${project.title}`}
                      id={`menu-item-${project.title}`}
                      className="menu-item">
                    <Link to={project.path}>
                      {project.title}
                    </Link>
                  </li>
                ))}
                </ul>
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu