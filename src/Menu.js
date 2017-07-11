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
      <div style={{
        padding: '10px',
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
          <li><Link to="/">Home</Link></li>
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