import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


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
          <li><Link to="/">Design</Link></li>
          <li><Link to="/">Cinematography</Link></li>
          <li><Link to="/">Design</Link></li>
          <li><Link to="/">Research</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu