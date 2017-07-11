import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import projectList from './ProjectList'


class Menu extends Component {
  render() {
    return (
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          {projectList.map((projectList, index) => (
            <div>
              <li><Link to="/">{projectList.type}</Link></li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu