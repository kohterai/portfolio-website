import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class TitleLine extends Component {
  render() {
    return (
      <div className="title-wrapper" style={{marginBottom: '12px'}}>
        <div className="title-header" style={{fontSize: '0.8em', fontWeight: 700}}>
          <a target="_blank" href={this.props.url}>
            {this.props.name}
            <span style={{fontWeight: 400}}>/ {this.props.title}</span>
          </a>
        </div>
        <div className="title-detail" style={{fontSize: '0.7em', color: '#a3a3a3'}}>
          {this.props.title} / <em>{this.props.date}</em>
        </div>
      </div>
    )
  }
}

export default TitleLine