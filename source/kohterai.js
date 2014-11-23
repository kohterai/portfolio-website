var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;




//Landing screen where user selects which mode.  Clicking mode will switch out components w/ appropiate mode.
var SelectMode = React.createClass({
  render: function() {
    return(
      <div id="selectMode">
        <div id="modeSelectTitle">KOH TERAI</div>

        <div className="modeSelectButton" id="phorographerSelect">
          <Link to="photographer">
            <img className="circularPhoto circular" src="images/KohCamera-Circular.png" />
            <div className="modeLabel">photographer</div>
          </Link>
        </div>

        <div className="modeSelectButton" id="developerSelect">
          <Link to="developer">
            <img className="circularPhoto circular" src="images/KohApple-Circular.png" />
            <div className="modeLabel">product designer</div>
          </Link>
        </div>
      </div>
    )
  }
});

//In charge of the projects menubar and loading projects
var ProjectDisplay = React.createClass({
  getInitialState: function() {
    return {
      mode: this.props.mode,
    };
  },
  aboutClicked: function() {
    menuCircle = document.getElementById("projectMenuCirlce")
    menuCircle.style.opacity = 0
    //Make it look like the ball is shooting up
    menuCircle.style.top = String(0)+'px';
  },
  render: function() {
    //which menuList to send into the menu is decided here
    switch (this.state.mode){
      case "Developer":
        var menuList = DeveloperDetails
        break;
      case "Photographer":
        var menuList = PhotoDetails
        break;
    }
    return(
      <div>
        <div id="projectElements">
          <div id="menu">
            <div id="menuKohHeading" onClick={this.aboutClicked}><Link to="aboutdev">Koh Terai</Link></div>
            <ProjectsMenu menuList={menuList}/>
          </div>
          <div className="projectDetail ">
            <this.props.activeRouteHandler/>
          </div>
        </div>
        <div className="clear"></div>
        <div id="projectsFooter">
            <div className="left"><i className="fa fa-paper-plane-o"></i>koh.terai@nyu.edu</div>
            <div className="right"><i className="fa fa-paperclip"></i>Download CV</div>
        </div>
      </div>
    );
  }
})


/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({
  render: function() {
    //Each menuList is a dict of {tite: , description:, keyword: }
    //item['description'] to print out desciption as well
    return (
      <ul className="menuList">
        <div id="projectMenuCirlce"></div>
        <div id="projectHeading">Projects</div>
        {this.props.menuList.map(function(item){
          // var clickHandler = this.menuItemClicked.bind(this, item);
          return (
              <ProjectMenuItem keyword={item['keyword']} title={item['title']} />
              // <ProjectMenuItem  onClick={this.menuItemClicked} keyword='nyuvote' title='pumklin' />
            );
          }, this)
        }
      </ul>
    )
  },
  //We need to make sure that the cirlce gets loaded in the right position first time it is rendered
  componentDidMount: function() {
    menuCircle = document.getElementById("projectMenuCirlce")
    //querySelector by .active to find which route user is currently on.
    var menuItem = document.querySelector(".active");
    var menuList = document.querySelector(".menuList");
    var menuItemCoords = menuItem.getBoundingClientRect();
    var menuListCoords = menuList.getBoundingClientRect();
    //setting circle to top for sweeping animation on initial load
    menuCircle.style.left = String(menuItemCoords.left-menuListCoords.left-15)+'px';
    menuCircle.style.top = String(0)+'px';
    //We do not want to display the cirlce if the about page is active.
    if (menuItem.parentNode.id == "menuKohHeading"){
      return;
    }
    menuCircle.style.top = String(menuItemCoords.top-menuListCoords.top+11)+'px';
    menuCircle.style.opacity = 1
  }
});

//We need to change the 

//Each menu item needs to be its own component so that we can use getDOMNode() for the menu circle position manipulation
var ProjectMenuItem = React.createClass({
  menuItemClicked: function() {
    menuCircle = document.getElementById("projectMenuCirlce")
    //we get the cordinates of the clicked menu item then manipulate #projectMenuCircle with it
    //getDOMNode() is needed to taget the DOM element instead of the react component
    var menuItemCoords = this.getDOMNode().getBoundingClientRect();
    var menuList = document.querySelector(".menuList");
    var menuListCoords = menuList.getBoundingClientRect();
    menuCircle.style.top = String(menuItemCoords.top-menuListCoords.top+11)+'px';
    menuCircle.style.left = String(menuItemCoords.left-menuListCoords.left-15)+'px';
    menuCircle.style.opacity = 1
  },
  render: function() {
    return(
      <Link to={this.props.keyword}>
        <li onClick={this.menuItemClicked} key={this.props.keyword} className="menuItem">
          <div>{this.props.title}</div>
        </li>
      </Link>
    )
  }
})

//This is the default "project" that will be loaded when user lands on Dev projects.
var AboutDev = React.createClass({
  render: function() {
    return(
      <div className="narrowSection">
        <img className="circularPhotoSmall" src="images/KohApple-Circular.png"/>
        <h2>Koh Terai</h2>
        <h3 className="blue">as a Developer</h3>
        <p>I am currently studying computer science at <b>New York University Abu Dhabi</b>. I’ve been keen on technology
        since a young age and even made a presentation about SMS Technology at an apple store when I was in 6th grade.
        I have been able to apply my strong sense of asthetics that I have cultivated over the years to develop beautiful
        looking interfaces that makes users smile. Functionality is not an afterthought but a prerequisites for all his designs.</p>
        <h4>Skills</h4>
        <table className="skillsTable">
          <tr>
            <td>Python</td>
            <td>MongoDB</td>
            <td>C++</td>
            <td>C</td>
            <td>HTML</td>
          </tr>
          <tr>
            <td>InDesign</td>
            <td>Photoshop</td>
            <td>Illustrator</td>
            <td>Keynote</td>
            <td>CSS</td>
          </tr>
        </table>
        <h4>Contact</h4>
        <p className="smallMargin">koh.terai@nyu.edu</p>
        <h4>CV</h4>
        <p className="smallMargin">download (doesnt work right now)</p>
      </div>

    )
  }
})

var NYUVote = React.createClass({
  render: function() {
    return(
      <div>
        <h2>NYU Vote</h2>
        <h3>Target audience of 20,000 over the NYU Global Network</h3>
        <p className="narrowSection">NYU Vote is an open source live voting platform designed to be the union of capability and simplicity.  It has an ultra simple user-facing ballot interface, as well as a minimilistic admin interface.  I lead the design and coded the front-end for this project.  The target audience was 20,000 students from NYU New York, Abu Dhabi, and Shanghai collectively.</p>
        <img className='fullWidth' src='images/developer/VoteHome.png' />
        <p className="narrowSection">The app was designed mobile first to accomidate high volumes of students voting through mobile devices.  NYU Vote is built with a responsive design and runs seamlessly on tablets and desktop computers as well.</p>
        <div className='halfWidthContainer'>
          <img className='halfWidth thinBorder left' src='images/developer/VoteMobile-1.png' />
          <img className='halfWidth thinBorder right' src='images/developer/VoteMobile-2.png' />
        </div>
        <img className='fullWidth thinBorder' src='images/developer/VoteEnteringBallot.png' />
        <p className="narrowSection">The green color which is often associated with validity is used throughout the design to make users feel secure about the voting app.</p>
        <img className='fullWidth thinBorder' src='images/developer/VoteBallot.png' />
        <p className="narrowSection">Extra emphasis was put into making the casting of the ballots as unambiguous as possible. The changing prompts and colors of the progress bar button was used to guide the user through process.</p>
        <img className='fullWidth' src='images/developer/VoteButtonFlow.png' />
        <div className='center'>
          <a className="button" href="https://vote.nyuapps.com/" target="_blank"><i className="fa fa-laptop"></i>View Website</a>
          <a className="button" href="https://github.com/hackAD/nyu-vote" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
        </div>
      </div>
    )
  }
})

var Yalla = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Yalla</h2>
        <h3>Community based event discovery platform in currently in Beta</h3>
        <p className="narrowSection">Yalla is an events-centric social network focussed on communities.  It integrates with existing cloud based calendar workflows.
        The system enables users to search for nearby events and RSVP to them. I lead the design and coded the front-end for this project.</p>
        <img className='fullWidth thinBorder' src='images/developer/YallaBlueLogin.png' />
        <p className="narrowSection">SVGs were used throughout Yalla to maximize compatibility accross screen resolutions and to minimize file sizes . PNG fallblacks were implemented for older systems.
        The login screen consisted of a loading animation through CSS and SVG properties.</p>
        <img className="fullWidth" src='images/developer/YallaBrowserMockup.png' />
        <p className="narrowSection">Yalla consists of a 3 pane interface which gets updated according to the user's actions. For desktops and devices with large screens, all three panes are shown at once.
        For tablets, two panes can be displayed at once and for mobile, only one pane is displayed.  The app is fully responsive.</p>
        <img className="thirdWidth left thinBorder" src='images/developer/Yallamobile1.jpg' />
        <img className="thirdWidth thinBorder" src='images/developer/Yallamobile2.jpg' />
        <img className="thirdWidth right thinBorder" src='images/developer/Yallamobile3.jpg' />
        <p className="narrowSection">Above is shown how the three panels would look on a mobile device.  The right two panels takes up the full length of the screen to maximize screen real estate.
        The menu intentionally does not cover the whole sreen to remind the user that they can swipe back to the pain events panel.</p>
        <img className="halfWidth thinBorder" src="images/developer/YallaEventCreation.jpg"/>
        <p className="narrowSection">When users try to create a new event, the right panel updates to the create event screen.</p>
        <p className="narrowSection">I also worked with the designer on the team to help create the logo.</p>
        <img className="fullWidth thinBorder" src="images/developer/YallaLogoCompilation.jpg" />
      </div>
      )
  }
})

var WellSense = React.createClass({
  render: function() {
    return(

      <div>
          <h2>WellSense</h2>
          <h3>3rd Place Winner at 2014 Hackathon for Social Good in the Arab world</h3>
          <p className="narrowSection">WellSense is a cost-effective web- & hardware solution for well monitoring, to benefit NGOs and local populations.
          I was in charge of designing and front-ending the interface.  I worked with parsing data for disaplying the graphs using the Google Charts API.</p>
          <img className='halfWidth thinBorder' src="images/developer/WellSense.jpg" />
          <p className='narrowSection'>The icons for well monitoring were designed be able to be distinguished based on color.</p>
          <img className='fullWidth' src='images/developer/WellSenseIcons.jpg' />
          <p>The project was completed in a span of 48 hours. The team conisted of faculty advisors from NYU and CMU Qatar as well as students from NYU Abu Dhabi
          and Carnegie Mellon University</p>
          <img className='fullWidth bottomMargin' src='images/developer/WellSenseGroupshot.jpg' />
          <a className="button" href="http://nyuad.nyu.edu/en/news-events/conferences/nyuad-hackathon.html" target="_blank"><i className="fa fa-laptop"></i>Hackathon Info</a>
          <a className="button" href="https://github.com/lingz/wellSense" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
      </div>
      )
  }
})

var StudentVoice = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Student Voice</h2>
        <h3>Online feedback sytem developed for NYUAD Student Government</h3>
        <p>Student Voice is a social platform for discussion of how students can improve the global NYU Community. It is a forum for topics ranging from those affecting specific schools, to the entire GNU.  I was a part of the team that designed and front-ended this system.</p> 
        <img className='fullWidth thinBorder' src='images/developer/StudentVoiceFeed.jpg' />
        <p>Gradations were used for the background since there was a time they were hip. When users click on a particular issue from the feed
        the details page is rendered where they can comment on the issue at hand.</p>
        <img className='fullWidth' src='images/developer/StudentVoiceDetails.jpg' />
        <p>Users have the ability to tag their issues on the submit issue page. The website is created fully responsive.</p>
        <img className='fullWidth bottomMargin' src='images/developer/StudentVoiceCreateIssue.jpg' />
        <a className="button" href="https://github.com/lingz/nyu-student-voice" target="_blank"><i className="fa fa-code"></i>Examine Code</a>

      </div>
      )
  }
})

var MiscDev = React.createClass({
  render: function() {
    return(
      <div>
        <div id="HideAndSeak">
          <h2>Hide and Seak</h2>
          <h3>Final Project for Intro to Computer Science coded in Python</h3>
          <p className='narrowSection'>The game was developed in a group of two. I was responsible mainly for the implementation
          of GUI using pygame.  All graphics and pygame implementations are done by me.</p>
          <div className='halfWidthContainer'>
            <img className='halfWidth left thinBorder' src='images/developer/HideAndSeakMain.jpg' />
            <img className='halfWidth thinBorder' src='images/developer/HideAndSeakAttack.jpg' />
          </div>
          <div className='halfWidthContainer'>
            <img className='halfWidth left' src='images/developer/HideAndSeakVictory.jpg' />
            <img className='halfWidth' src='images/developer/HideAndSeakDead.jpg' />
          </div>
          <p>The game consists of 4 main interfaces.  The objective of the game is to blow up all enemy houses before the enemy slays you
          or reaches your homebase.</p>
          <a className="button" href="https://github.com/kohterai/HideAndSeak" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
        </div>
        <div className="dividerLine"></div>
        <div id="DiplomatLayout">
          <h2>The Diplomat Layout Editor</h2>
          <h3>Complete resdesign of high school newspaper</h3>
          <img className='thirdWidth left thinBorder' src='images/developer/Diplomat-1v48issue2-1.jpg' />
          <img className='thirdWidth thinBorder' src='images/developer/Diplomat-2v47issue10-1.jpg' />
          <img className='thirdWidth right thinBorder' src='images/developer/Diplomat-3v47issue10-2.jpg' />

          <img className='thirdWidth left thinBorder' src='images/developer/Diplomat-4v47issue9.jpg' />
          <img className='thirdWidth thinBorder' src='images/developer/Diplomat-5v47issue10-3.jpg' />
          <img className='thirdWidth right thinBorder' src='images/developer/Diplomat-6v48issue1-1.jpg' />

          <img className='halfWidth thinBorder left' src='images/developer/Diplomatv48issue2-2.jpg' />
          <img className='halfWidth thinBorder right' src='images/developer/Diplomatv48issue2-3.jpg' />
          <img className='halfWidth thinBorder left' src='images/developer/Diplomatv48issue3-3.jpg' />
          <img className='halfWidth thinBorder right' src='images/developer/Diplomatv48issue3-4.jpg' />


        </div>
      </div>
      )
  }
})

var AboutPhoto = React.createClass({
  render: function() {
    return(
      <div className="narrowSection">
        <img className="circularPhotoSmall" src="images/KohCamera-Circular.png"/>
        <h2>Koh Terai</h2>
        <h3 className="blue">as a Photographer</h3>
        <p>I am currently studying computer science at <b>New York University Abu Dhabi</b>. I’ve been keen on technology
        since a young age and even made a presentation about SMS Technology at an apple store when I was in 6th grade.
        I have been able to apply my strong sense of asthetics that I have cultivated over the years to develop beautiful
        looking interfaces that makes users smile. Functionality is not an afterthought but a prerequisites for all his designs.</p>
        <h4>Skills</h4>
        <table className="skillsTable">
          <tr>
            <td>Python</td>
            <td>MongoDB</td>
            <td>C++</td>
            <td>C</td>
            <td>HTML</td>
          </tr>
          <tr>
            <td>InDesign</td>
            <td>Photoshop</td>
            <td>Illustrator</td>
            <td>Keynote</td>
            <td>CSS</td>
          </tr>
        </table>
        <h4>Contact</h4>
        <p className="smallMargin">koh.terai@nyu.edu</p>
        <h4>CV</h4>
        <p className="smallMargin">download (doesnt work right now)</p>
      </div>

    )
  }
})

var Portraits = React.createClass({
  render: function() {
    return(
      <div id="portraits">
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-izumi-1.jpg' />
          <img className='halfWidth' src='images/photo/portrait-izumi-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-yabui-1.jpg' />
          <img className='halfWidth' src='images/photo/portrait-yabui-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-KP-1.jpg' />
          <img className='halfWidth' src='images/photo/portrait-KP-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-grad-1.jpg' />
          <img className='halfWidth' src='images/photo/portrait-grad-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-band-1.jpg' />
          <img className='halfWidth' src='images/photo/portrait-band-2.jpg' />
        </div>
        <img className='halfWidth' src='images/photo/portrait-alistair-1.jpg' />
      </div>
    )
  }
})

//Title is what shows up in the menu list
var DeveloperDetails = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'miscdevwork'}
];

var PhotoDetails = [
  {title: 'About', description: 'Kohs portfolio website', keyword:'aboutphoto'},
  {title: 'Portraits', description: 'Voting Service', keyword: 'portraits'},
  {title: 'Sports', description: 'Voting Service', keyword: 'portraits'},
  {title: 'Journalism', description: 'Voting Service', keyword: 'portraits'},
  {title: 'Georgia', description: 'Voting Service', keyword: 'portraits'}
];

//name must be identical to the keyword inside menu keyword
//we use the ProjectDisplay component but with the mode parameter as Photographer
var routes = (
  <Routes location="hash">
    <Route path="/" handler={SelectMode} />
    <Route path="/dev" name="developer" mode={"Developer"} handler={ProjectDisplay}>
      <Route name="nyuvote" handler={NYUVote} />
      <Route name="yalla" handler={Yalla} />
      <Route name="wellsense" handler={WellSense} />
      <Route name="studentvoice" handler={StudentVoice} />
      <Route name="miscdevwork" handler={MiscDev} />
      <DefaultRoute name="aboutdev" handler={AboutDev} />
    </Route>
    <Route path="/photo" name="photographer" mode={"Photographer"} handler={ProjectDisplay}>
      <Route name="portraits" handler={Portraits} />
      <DefaultRoute name="aboutphoto" handler={AboutPhoto} />
    </Route>
  </Routes>
);



React.render(
  routes, document.getElementById('container')
);

// $(document).ready(function() {
//   $("#menuKohHeading").click(function(){
//     console.log("we are here and this is working")
//   })
// })
// var samplePos = document.querySelectorAll('#menuKohHeading');
// var rect = samplePos.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);