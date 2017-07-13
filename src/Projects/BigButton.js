import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './BigButton.css'

class BigButton extends Component {
  render() {
    return (
      <div>
        <div className="button-text" style={{
        textAlign: "center",
        margin: "30px 0px"}}>
          <a target="_blank" href={this.props.url} className="button-wrapper" style={{
        textDecoration: "none"}}>
            <div className="button-content">
              {this.props.title}
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default BigButton