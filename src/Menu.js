import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import projectList from './ProjectList'
import './menu.css';


class Menu extends Component {
  render() {
    return (
      <div className="Menu" style={{
        marginTop: '50px',
        position: 'fixed'
      }}>
        <div style={{
          fontSize: '1.5em',
          fontWeight: '600'
        }}>
          KOH TERAI
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projectList.map((projectList, index) => (
            <div key={projectList.type}>
              <li><Link to="/">{projectList.type}</Link></li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu