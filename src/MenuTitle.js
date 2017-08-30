import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'


class MenuTitle extends Component {
  scrollToSection(id) {
    $(document).ready(function(){

        $(".menu-title-a").each(function() {
          $(this).removeClass("active")
        });
        $(".menu-title").each(function() {
          $(this).removeClass("active-title")
        });

        $(`#menu-title-${id}`).addClass("active-title")
        $(`#menu-title-a-${id}`).addClass("active")

        // offset calculation, 61px
        var ballPos = $(`#menu-title-a-${id}`).position().top + 61
        $("#menu-ball").css({marginTop: ballPos})
        $("#menu-ball").addClass("scrolling")

        $(document.body).animate({
        'scrollTop':   $(`#${id}`).offset().top-35
        }, 400,function(){
          // call back after scroll animation is completed
          $("#menu-ball").removeClass("scrolling")
        });
    })
  }



  render() {
    return (
      <div onClick={()=>{this.scrollToSection(`${this.props.category}`);
                          {this.props.menuClicked()}}
                        }
       id={`menu-title-${this.props.category}`} className="menu-title">
        <Link 
        to={`/#${this.props.category}`} className={`menu-title-a`} id={`menu-title-a-${this.props.category}`}>{this.props.category}</Link>
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