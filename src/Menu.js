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


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick() {
    console.log("handleClick")
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

  componentDidMount() {
    // $(".bm-overlay").click() {
    // console.log('component did mount - stuff to clean up later');

    // }
  }

  render() {
    const { location } = this.props
    // Function to figure out whether submenu is displayed or not
    // Function should be relocated to somewhere more appropiate (block, none, matters much less now)
    function displaySubmenu(path, projType) {
      var res = path.split("/")
      // len = 2 means we are on homepage
      if (res.length<3) {

        // On homepage, hide all sub menus
        for (let category of projectList) {
          $(document).ready( function () {
            $(`#menu-${category.type}`).css({ "opacity": "0", "visibility": "hidden"})
            $(`#menu-title-${category.type}`).css({"margin-bottom": "0px"})
          })
        }
        return "none"        
      } else {
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
              })
              return "block"
            }
          }
        }
      }
      return "none"
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
            <Link onClick={this.closeMenu.bind(this)} to="/#" style={{fontSize: '1.5em', fontWeight: '600', color: '#000000'}}>
              KOH TERAI
            </Link>

          <div id="menu-list">
            {projectList.map((projectList, index) => (
              <div key={projectList.type}>
                <MenuTitle menuClicked={this.closeMenu.bind(this)} category={projectList.type} />
                  <ul id={`menu-${projectList.type}`} className="menu-sub" style={{
                    display: displaySubmenu(`${location.pathname}`, projectList.type)
                  }}>
                  {projectList.projects.map((project, index) => (
                    <MenuProject menuClicked={this.closeMenu.bind(this)} project={project.title} pathName={project.path}/>
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