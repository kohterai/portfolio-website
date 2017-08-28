import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'


class MenuTitle extends Component {
  scrollToSection(id) {
    $(document).ready(function(){
        $(document.body).animate({
        'scrollTop':   $(`#${id}`).offset().top-35
        }, 400);        
    })
  }



  render() {
    return (
      <div onClick={()=>{this.scrollToSection(`${this.props.category}`); {this.props.menuClicked()}}}
       id={`menu-title-${this.props.category}`} className="menu-title">
        <Link to={`/#${this.props.category}`}>{this.props.category}</Link>
      </div>
    )
  }
}

export default MenuTitle

// <a href={`/#/#${this.props.category}`}>
//   {this.props.category}
// </a>

    // return (
    //   <div onClick={(event) => { this.props.menuClicked; this.hello(`${this.props.category}`);}}
    //    id={`menu-title-${this.props.category}`} className="menu-title">
    //     <Link to={`/#${this.props.category}`}>{this.props.category}</Link>
    //   </div>
    // )