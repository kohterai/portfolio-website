import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Thumbnail extends Component {
	render() {
		return (
			<div>
				<p>Hello I am a thumbnail</p>
				<Link to={`/projects/${this.props.title}`}>{this.props.title}</Link>
			</div>
		)
	}
}

export default Thumbnail