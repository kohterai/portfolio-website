import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'


class MenuTitle extends Component {
  scrollToSection(id) {
    $(document).ready(function(){
        // .second-scroll prevents the ball from getting confused when a user tries to click another title while scrolling.
        // if user is superhuman and can click three times during the scroll, scroll will get confused.
        if ($("#menu-ball").hasClass("scrolling")) {
          $("#menu-ball").addClass("second-scroll");
        }

        $(".menu-title-a").each(function() {
          $(this).removeClass("active")
        });
        $(".menu-title").each(function() {
          $(this).removeClass("active-title")
        });

        $(`#menu-title-${id}`).addClass("active-title")
        $(`#menu-title-a-${id}`).addClass("active")

        // offset calculation, 61px for ball position
        // delaying ball fade away, if submenu is being hidden
        // 1) hide menu-ball-sub
        // 2) show menu-ball after delay
        if ($("#menu-list").hasClass("collapsing")) {
          $("#menu-ball")
            .queue(function (next) { 
              var ballPos = $(`#menu-title-a-${id}`).position().top + 61
              //temporarily disable transitions while we reposition the ball instantly
              // $("#menu-ball-sub").addClass("no-transition")
              // hide sub-menu-ball
              $("#menu-ball-sub").removeClass("ball-enter-sub")
              $("#menu-ball-sub").addClass("ball-exit-sub")
              next();               
            })
            .delay(260)
            .queue(function (next) { 
              var ballPos = $(`#menu-title-a-${id}`).position().top + 61
              //temporarily disable transitions while we reposition the ball instantly
              $("#menu-ball").addClass("no-transition")

              $("#menu-ball").css({marginTop: ballPos})
              $("#menu-list").removeClass("collapsing")
              $("#menu-list").addClass("collapsed")

              //bring ball back in after collapse is completed
              $("#menu-ball").removeClass("ball-exit")
              $("#menu-ball").addClass("ball-enter")
              next();               
            })
            .delay(100)
            .queue(function (next) {
              $("#menu-ball").removeClass("no-transition")
              next();
            })
          $("#menu-ball").addClass("scrolling")

          //dont scroll if you are coming to thumbnail page from project page

          $(document.body).animate({
            'scrollTop':   $(`#${id}`).offset().top-35
            }, 0,function(){
              // call back after scroll animation is completed
              if ($("#menu-ball").hasClass("second-scroll")) {
                $("#menu-ball").removeClass("second-scroll")
              } else {
                $("#menu-ball").removeClass("scrolling")
              }
            });
        } else {
          var ballPos = $(`#menu-title-a-${id}`).position().top + 61
          $("#menu-ball").css({marginTop: ballPos})
          $("#menu-ball").addClass("scrolling")

          $(document.body).animate({
          'scrollTop':   $(`#${id}`).offset().top-35
          }, 400,function(){
            // call back after scroll animation is completed
            if ($("#menu-ball").hasClass("second-scroll")) {
              $("#menu-ball").removeClass("second-scroll")
            } else {
              $("#menu-ball").removeClass("scrolling")
            }
          });

        }
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