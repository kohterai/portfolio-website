import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import projectList from './ProjectList'
import './menu.css';
import $ from 'jquery'
import MenuTitle from './MenuTitle'
import MenuProject from './MenuProject'
import HamburgerMenu from 'react-hamburger-menu'
import { slide as AnimatedMenu } from 'react-burger-menu'
import Headroom from 'react-headroom'
import MenuBall from './MenuBall'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })

    if (!this.state.open) {
      $("#menu-bar").css({"background-color":"rgba(255, 255, 255, 0)"})
      $("#cover").css({"display":"block"})
    } else {
      $("#menu-bar").css({"background-color":"rgba(255, 255, 255, 0.92)"})
      $("#cover").css({"display":"none"})
    }
  }

  closeMenu() {
    if (this.state.open) {
      this.setState({
        open: !this.state.open
      })
      $("#menu-bar").css({"background-color":"rgba(255, 255, 255, 0.92)"})
      $("#cover").css({"display":"none"})
    }
  }


  isMenuOpen() {
    return (this.state.open) ? "menu-open" : "menu-closed"
  }

  getBallBack() {
    var that = this;
    $("#menu-list")
      .delay(5)
      .queue(function (next) {
        that.ballRecover();
        next();
      })
  }

  ballRecover() {
    if ($("#menu-list").hasClass("collapsing")) {
      $("#menu-ball")
        .delay(10)
        .queue(function (next) {
          var ballPos = $(`#menu-title-a-${projectList[0].type}`).position().top + 61
          //temporarily disable transitions while we reposition the ball instantly
          $("#menu-ball").addClass("no-transition")
          $("#menu-ball-sub").addClass("no-transition")

          $("#menu-ball").css({marginTop: ballPos})
          $("#menu-list").removeClass("collapsing")
          $("#menu-list").addClass("collapsed")

          //bring ball back in after collapse is completed
          $("#menu-ball").removeClass("ball-exit")
          $("#menu-ball").addClass("ball-enter")

          $("#menu-ball-sub").removeClass("ball-enter-sub")
          $("#menu-ball-sub").addClass("ball-exit-sub")
          next();
        })
        .delay(100)
        .queue(function (next) {
          $("#menu-ball").removeClass("no-transition")
          $("#menu-ball-sub").removeClass("no-transition")
          next();
        })
    }
  }

  // changeMenuState() {
  //   this.setState({
  //     subMenuIsOpen: !this.state.subMenuIsOpen
  //   })
  // }

  render() {
    const { location } = this.props
    // Function to figure out whether submenu is displayed or not
    // Function should be relocated to somewhere more appropiate (block, none, matters much less now)
    function displaySubmenu(path, projType) {
      var res = path.split("/")
      // len = 2 means we are on homepage
      if (res.length<3) {
        if ($("#menu-list").hasClass("expanded")) {
          //we are collapsing the menu
          $("#menu-list").removeClass("expanded")
          $("#menu-list").addClass("collapsing")
          //we will turn .collapsing into .collapsed inside MenuTitle component
        }

        // On homepage, hide all sub menus
        for (let category of projectList) {
          $(document).ready( function () {
            $(`#menu-${category.type}`).css({ "opacity": "0", "visibility": "hidden"})
            $(`#menu-title-${category.type}`).css({"margin-bottom": "0px"})
          })
        }

        return "none"
      } else {
        // Display correct submenu based on which project we are on
        for (let category of projectList) {
          for (let project of category.projects) {
            if (project.path === path & category.type === projType) {
              $(document).ready( function () {
                // var subMenuSize = $(`#menu-${category.type}`).height()
                var subMenuSize = $(`#menu-${category.type}`).height()
                var subMenuLoc = $(`#menu-title-${category.type}`).position()
                $(`#menu-title-${category.type}`).css({"margin-bottom": `${subMenuSize}px`})
                $(`#menu-${category.type}`).css({"top": `${subMenuLoc.top+215}px`})
                $(`#menu-${category.type}`).css({ "opacity": "1", "visibility": "visible"})

                // Deal with the active class for category title in menu
                $(".menu-title-a").each(function() {
                  $(this).removeClass("active")
                })

                $(".menu-title").each(function() {
                  $(this).removeClass("active-title")
                })

                $(".menu-item").each(function() {
                  $(this).removeClass("active-item")
                })

                $(`#menu-title-${category.type}`).addClass("active-title")
                $(`#menu-title-a-${category.type}`).addClass("active")

                $(`#menu-item-${project.ref}`).addClass("active-item")


                // make appear, menu-ball-sub
                // var ballPosSub = $(`#menu-item-${project.ref}`).position().top + 89 + $(`#menu-title-a-${category.type}`).position().top
                // $("#menu-ball-sub").css({marginTop: ballPosSub})



                // temporarily disable transition if menu is being expanded, so ball doesnt jump from previous position
                if (!($("#menu-list").hasClass("expanded"))) {
                  $("#menu-ball-sub")
                    .delay(10)
                    .queue(function (next) {
                      $("#menu-ball-sub").addClass("no-transition")
                      var ballPosSub = $(`#menu-item-${project.ref}`).position().top + 89 + $(`#menu-title-a-${category.type}`).position().top
                      $("#menu-ball-sub").css({marginTop: ballPosSub})
                      next();
                    })
                    .delay(50)
                    .queue(function (next) {
                      $("#menu-ball-sub").removeClass("no-transition")
                      next();
                    })
                } else {
                  // move ball without disabling transition
                  var ballPosSub = $(`#menu-item-${project.ref}`).position().top + 89 + $(`#menu-title-a-${category.type}`).position().top
                  $("#menu-ball-sub").css({marginTop: ballPosSub})
                }
                // sub-ball position
                // $("#menu-ball-sub")
                //   .queue(function (next) {
                //     $("#menu-ball-sub").addClass("no-transition")
                //     var ballPosSub = $(`#menu-item-${project.ref}`).position().top + 89 + $(`#menu-title-a-${category.type}`).position().top
                //     $("#menu-ball-sub").css({marginTop: ballPosSub})
                //   })
                //   .delay(100)
                //   .queue(function (next) {
                //     $("#menu-ball-sub").removeClass("no-transition")
                //     next();
                //   })

                $("#menu-list").removeClass("collapsed")
                $("#menu-list").addClass("expanded")
              })
              return "block"
            }
          }
        }
      }
      return "none"
    }

    // get ball when loading landing page path: "/"
    function menuBallAnimate(path) {
      $( document ).ready(function() {
        // console.log(path)
        if (path == "/" && !($("#menu-list").hasClass("collapsing"))) {
          $("#menu-ball").removeClass("ball-exit")
          $("#menu-ball").addClass("ball-enter")
        } else if (path=="/about") {
          console.log("in about")
          // Hide both balls

          $("#menu-ball").addClass("ball-exit")
          $("#menu-ball").removeClass("ball-enter")

          $("#menu-ball-sub").removeClass("ball-enter-sub")
          $("#menu-ball-sub").addClass("ball-exit-sub")

          // Make sure that non of the category menu items are bolded
          $(".menu-title-a").each(function() {
            $(this).removeClass("active")
          })

          $(".menu-title").each(function() {
            $(this).removeClass("active-title")
          })

          $(".menu-item").each(function() {
            $(this).removeClass("active-item")
          })


        } else {
          // Goes inside here while "collapsing" or not "/"
          $("#menu-ball").removeClass("ball-enter")
          $("#menu-ball").addClass("ball-exit")

          $("#menu-ball-sub").removeClass("ball-exit-sub")
          $("#menu-ball-sub").addClass("ball-enter-sub")
        }
      });
    }

    return (
      <div>
          <div id="cover"
          onClick={this.closeMenu.bind(this)}
          style={{
              height: "100%",
              width: "100%",
              position: "fixed",
              zIndex: "3"
            }}/>
          <div id="menu-bar">
            <div id="menu-icon">
              <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  width={18}
                  height={15}
                  strokeWidth={2}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
              />
            </div>
          </div>
        <AnimatedMenu className={this.isMenuOpen()}
                      customBurgerIcon={ false }
                      customCrossIcon={ false }
                      id="Menu"
                      width={ 170 }
                      onStateChange={ this.state.stateChange }
                      isOpen={this.state.open}
                      style={{ marginTop: '150px', position: 'fixed'}}>

            <MenuBall idName={"menu-ball"} className={menuBallAnimate(`${location.pathname}`)}/>
            <MenuBall idName={"menu-ball-sub"} />


            <Link onClick={(event) => { this.closeMenu.bind(this); this.getBallBack(); }} to="/about" style={{fontSize: '1.5em', fontWeight: '600', color: '#000000'}}
            className="active-title">
              Koh Terai
            </Link>

          <div id="menu-list">
            {projectList.map((projectList, index) => (
              <div key={projectList.type}>
                <MenuTitle menuClicked={this.closeMenu.bind(this)} category={projectList.type} />
                  <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
                    display: displaySubmenu(`${location.pathname}`, projectList.type)
                  }}>
                  {projectList.projects.map((project, index) => (
                    <MenuProject menuClicked={this.closeMenu.bind(this)} refName={project.ref} project={project.menutitle} pathName={project.path}/>
                  ))}
                  </ul>
              </div>
            ))}
          </div>
        </AnimatedMenu>
      </div>
    )
  }
}

export default Menu
