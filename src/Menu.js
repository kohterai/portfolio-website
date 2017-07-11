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

    function displaySubmenu(path) {
      var res = path.split("/")
      console.log(res)
      // len = 2 means we are on homepage
      if (res.length<3) {
        return "none"        
      } else {
        // {projectList.map((projectList, index) => (
        //   <div key={projectList.type}>
        //     <li>
        //       <Link to={'/'} onClick={()=>handleClick(projectList.type)}>
        //         {projectList.type}
        //       </Link>
        //       <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
        //         display: displaySubmenu(`${location.pathname}`)
        //       }}>
        //       {projectList.projects.map((project, index) => (
        //         <li id={`menu-item-${project.title}`} className="menu-item">
        //           <Link to={project.path}>
        //             {project.title}
        //           </Link>
        //         </li>
        //       ))}
        //       </ul>
        //     </li>
        //   </div>
        // ))}
      }
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
                <Link to={'/'} onClick={()=>handleClick(projectList.type)}>
                  {projectList.type}
                </Link>
                <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
                  display: displaySubmenu("")
                }}>
                {projectList.projects.map((project, index) => (
                  <li id={`menu-item-${project.title}`} className="menu-item">
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