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
            <div className="modeLabel">developer</div>
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
  showMenu: function() {
    menu = document.getElementById("menu")
    if (menu.classList.contains('active')){
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
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
        var CVLink = "downloads/CV-KohTerai-Dev.pdf"
        var aboutLink ="aboutdev"
        break;
      case "Photographer":
        var menuList = PhotoDetails
        var CVLink = "downloads/CV-Photo.pdf"
        var aboutLink ="aboutphoto"
        break;
    }
    return(
      <div>
        <div onClick={this.showMenu} id="showmenu"><i id="menuBar" className="fa fa-bars"></i></div>
        <div id="projectElements">
          <div id="menu" className="pull-menu">
            <div id="homeButton"><Link to="home"><i className="fa fa-home" id="homeIcon"></i><div id="homeText"></div></Link></div>
            <div id="menuKohHeading" onClick={this.aboutClicked}><Link to={aboutLink}>Koh Terai</Link></div>
            <ProjectsMenu menuList={menuList}/>
          </div>
          <div className="projectDetail ">
            <this.props.activeRouteHandler/>
          </div>
        </div>
        <div className="clear"></div>
        <ProjectFooter cvLink={CVLink} />
      </div>
    );
  }
})

var ProjectFooter = React.createClass({
  render: function() {
    return(
      <div id="projectsFooter">
        <div className="left"><a href="mailto:koh.terai@nyu.edu"><i className="fa fa-paper-plane-o"></i>koh.terai@nyu.edu</a></div>
        <div className="right"><a href={this.props.cvLink} target="_blank"><i className="fa fa-paperclip"></i>Download CV</a></div>
      </div>
      )
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
    menuCircle.style.top = String(menuItemCoords.top-menuListCoords.top+104)+'px';
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
    menuCircle.style.top = String(menuItemCoords.top-menuListCoords.top+104)+'px';
    menuCircle.style.left = String(menuItemCoords.left-menuListCoords.left-15)+'px';
    menuCircle.style.opacity = 1
    //If we are in mobile mode, automatically hide menu if user clicks on project
    menu = document.getElementById("menu")
    if (menu.classList.contains('active')){
      menu.classList.remove('active');
    }
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
      <div className="aboutMenu narrowSection">
        <img className="circularPhotoSmall" src="images/KohApple-Circular.png"/>
        <h2>Koh Terai</h2>
        <h3 className="blue">as a Developer</h3>
        <p>Hi, I’m Koh and currently study computer science at <a href="http://nyuad.nyu.edu/en/" target="_blank"><b>New York University Abu Dhabi</b></a>.
        Before my life in Abu Dhabi, I have attended St. Mary’s International School in Tokyo, Japan.
        I’ve been keen on technology since a young age and even made a presentation about<a href="https://www.facebook.com/video.php?v=202823495000&l=8839472477727382889" target="_blank"><b> SMS Technology</b></a> at an apple store when I was in elementary school.
        <a><b> Producing beautiful products</b></a> is my passion and in the recent years I have been able to do this through web and software development.  
        I am incredibly keen on writing clean and reusable code and pay close attention to details.
        </p>
        <p>
        I’m also an avid <Link to="photographer" target="_blank"><b>photographer and cinematographer</b></Link> so please do take a look at my photographic work if you have a chance to. 
        </p>
        <h4>Skills</h4>
        <table id="skills" className="skillsTable">
          <tr>
            <td>Python</td>
            <td>MongoDB</td>
          </tr>
          <tr>
            <td>C++</td>
            <td>C</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>CSS</td>
          </tr>
          <tr>
            <td>Photoshop</td>
            <td>Illustrator</td>
          </tr>
          <tr>
            <td>Keynote</td>
            <td>InDesign</td>
          </tr>
        </table>
        <h4>Course Work</h4>
        <table className="skillsTable">
          <tr>
            <td>Intro to Computer Science</td>
          </tr>
          <tr>          
            <td>Discrete Math</td>
          </tr>
          <tr>
            <td>Algorithms</td>
          </tr>
          <tr>
            <td>Data Structures</td>
          </tr>
          <tr>
            <td>Computer Systems Organisations</td>
          </tr>
          <tr>
            <td>Foundations of Computer Graphics</td>
          </tr>
        </table>
        <h4>Contact</h4>
        <p className="smallMargin">koh.terai@nyu.edu</p>
        <h4>CV</h4>
        <a href="downloads/CV-KohTerai-Dev.pdf" target="_blank"><p className="smallMargin">view resume</p></a>
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
        <p className="narrowSection mainCaption">NYU Vote is an open source live voting platform designed to be the union of capability and simplicity. It has an ultra simple user-facing ballot interface, as well as a minimalistic admin panel. The target audience was 20,000 students from NYU New York, NYU Abu Dhabi, and NYU Shanghai.
        I lead the design and coded the front-end for this project.</p>
        <img className='fullWidth' src='images/developer/VoteHome.png' />
        <p className="narrowSection">The app was designed mobile first to accommodate high volumes of students voting through mobile devices. NYU Vote is built with a responsive design and runs seamlessly across tablets, mobile, and desktop computers.</p>
        <div className='halfWidthContainer'>
          <img className='halfWidth thinBorder left' src='images/developer/VoteMobile-1.png' />
          <img className='halfWidth thinBorder right' src='images/developer/VoteMobile-2.png' />
        </div>
        <img className='fullWidth thinBorder' src='images/developer/VoteEnteringBallot.png' />
        <p className="narrowSection">The green color, which is often associated with validity, is used throughout the design to make users feel secure about the voting app.</p>
        <img className='fullWidth thinBorder' src='images/developer/VoteBallot.png' />
        <p className="narrowSection">Extra emphasis was put into making the casting of the ballots as unambiguous as possible. The changing prompts and colors of the progress bar button were used to guide the user through process.</p>
        <img className='fullWidth' src='images/developer/VoteButtonFlow.png' />
        <div className='center'>
          <a className="button double" href="https://vote.nyuapps.com/" target="_blank"><i className="fa fa-laptop"></i>View Website</a>
          <a className="button double" href="https://github.com/hackAD/nyu-vote" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
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
        <p className="narrowSection mainCaption">Yalla is an events-centric social network focused on communities. It integrates 
        with existing cloud based calendar workflows. The system enables users to search for nearby events and RSVP to 
        them. I lead the design and coded the front-end for the startup.</p>
        <img className='fullWidth thinBorder' src='images/developer/YallaBlueLogin.png' />
        <p className="narrowSection">SVGs were used throughout Yalla to maximize compatibility across 
        screen densities and to minimize file sizes.  PNG fallbacks were 
        implemented to support older systems.
        </p>
        <p className="narrowSection">Yalla consists of a 3-pane interface, which is updated according to the user's actions. For desktops and devices with large screens, all three panes are shown at once.
        For tablets, two panes can be displayed at once. For mobile, only one pane is displayed. The app is fully responsive.</p>
        <img className="fullWidth" src='images/developer/YallaBrowserMockup.png' />
        <p className="narrowSection">The images below show how the three panels would appear on a mobile device.  The right two panels in the Yalla interface take up the full length of the screen to maximize screen real estate.
        The menu intentionally does not cover the whole screen to remind the user that one can swipe back to the main events panel.</p>
        <img className="thirdWidth left thinBorder" src='images/developer/Yallamobile1.jpg' />
        <img className="thirdWidth thinBorder" src='images/developer/Yallamobile2.jpg' />
        <img className="thirdWidth right thinBorder" src='images/developer/Yallamobile3.jpg' />
        <p className="narrowSection">When users try to create a new event, the right panel updates to the "create event" screen.</p>
        <img className="halfWidth thinBorder" src="images/developer/YallaEventCreation.jpg"/>
        <p className="narrowSection">I oversaw the logo creation process.</p>
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
          <p className="narrowSection mainCaption">WellSense is a cost-effective web and hardware solution for well management benefit NGOs and local populations.
          I was in charge of designing and front-ending the interface. I also worked with parsing data for displaying the graphs via the Google Charts API.</p>
          <img className='halfWidth thinBorder' src="images/developer/WellSense.jpg" />
          <p className='narrowSection'>The icons for well monitoring are designed to be able to be distinguished by color.</p>
          <img className='fullWidth' src='images/developer/WellSenseIcons.jpg' />
          <p className="narrowSection">The project was completed in a span of 48 hours.  The team consisted of faculty advisors from NYU and CMU Qatar
          as well as students from NYU Abu Dhabi and Carnegie Mellon University.  We were able to place 3rd at the hackathon.</p>
          <img className='fullWidth bottomMargin' src='images/developer/WellSenseGroupshot.jpg' />
          <div className='center'>
            <a className="button double" href="http://nyuad.nyu.edu/en/news-events/conferences/nyuad-hackathon.html" target="_blank"><i className="fa fa-laptop"></i>Hackathon Info</a>
            <a className="button double" href="https://github.com/lingz/wellSense" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
          </div>
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
        <p className="narrowSection mainCaption">Student Voice is a public platform in which students can suggest ways to improve the NYU Global Community.
        Topics range from school specific to the entire Global Network Univerty.  I was a part of the team that designed and front-ended the system.</p> 
        <img className='fullWidth thinBorder' src='images/developer/StudentVoiceFeed.jpg' />
        <p className="narrowSection">The background gradation is evocative of the design trends of the past. When users click on a particular issue from the feed,
        the details page is rendered.</p>
        <img className='fullWidth' src='images/developer/StudentVoiceDetails.jpg' />
        <p className="narrowSection">Users have the ability to tag their issues on the "submit issue" page. The website is fully responsive.</p>
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
          <p className='narrowSection mainCaption'>The game was developed with a partner. I was mainly responsible  
          for the implementation of GUI using the pygame module.  I also in charge all the graphics for this project.</p>
          <div className='halfWidthContainer'>
            <img className='halfWidth left thinBorder' src='images/developer/HideAndSeakMain.jpg' />
            <img className='halfWidth thinBorder' src='images/developer/HideAndSeakAttack.jpg' />
          </div>
          <div className='halfWidthContainer'>
            <img className='halfWidth left' src='images/developer/HideAndSeakVictory.jpg' />
            <img className='halfWidth' src='images/developer/HideAndSeakDead.jpg' />
          </div>
          <p className='narrowSection'>The game consists of 4 main interfaces.  The objective of the game is to blow up all enemy houses before the enemy slays you
          or reaches your home base.  The man featured with the burger king hat was our lovely professor as he always liked to include "The end is nigh" in his slide decks.</p>
          <a className="button" href="https://github.com/kohterai/HideAndSeak" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
        </div>
        <div className="dividerLine"></div>
        <div id="Architecture">
          <h2>Architectural Design</h2>
          <h3>Architectural models for IB Visual Arts</h3>
          <p className='narrowSection mainCaption'>Models were first modeled on the computer and then constructed using styrofoam.</p>
          <img className='fullWidth' src='images/developer/Architect-1.jpg' />
          <img className='halfWidth left' src='images/developer/Architect-2.jpg' />
          <img className='halfWidth right' src='images/developer/Architect-3.jpg' />
          <img className='halfWidth left' src='images/developer/Architect-4.jpg' />
          <img className='halfWidth right' src='images/developer/Architect-5.jpg' />
          <img className='fullWidth' src='images/developer/Architect-6.jpg' />
        </div>
        <div className="dividerLine"></div>
        <div id="DiplomatLayout">
          <h2>Newspaper Layout Editor</h2>
          <h3>Complete resdesign of The Diplomat</h3>
          <p className='narrowSection mainCaption'>I completely redesigned The Diplomat, my high school newspaper for its final year with print runs before digitizaton.  
          I had full control over everything ranging from the choice of typefaces to the color scheme and the masthead.  
          The paper dimension was 11" X 15" with a circulation of over 150.</p>
          <img className='thirdWidth left thinBorder' src='images/developer/Diplomat-1v48issue2-1.jpg' />
          <img className='thirdWidth thinBorder' src='images/developer/Diplomat-2v47issue10-1.jpg' />
          <img className='thirdWidth right thinBorder' src='images/developer/Diplomat-3v47issue10-2.jpg' />

          <img className='thirdWidth left thinBorder' src='images/developer/Diplomat-4v47issue9.jpg' />
          <img className='thirdWidth thinBorder' src='images/developer/Diplomat-5v47issue10-3.jpg' />
          <img className='thirdWidth right thinBorder' src='images/developer/Diplomat-6v48issue1-1.jpg' />
          <p className='narrowSection'>In my efforts to increase readership though a more approachable newspaper design, I strived 
          to make the middle spread as eye-catching as possible.</p>
          <img className='halfWidth thinBorder left' src='images/developer/Diplomatv48issue2-2.jpg' />
          <img className='halfWidth thinBorder right' src='images/developer/Diplomatv48issue2-3.jpg' />
          <img className='halfWidth thinBorder left' src='images/developer/Diplomatv48issue3-3.jpg' />
          <img className='halfWidth thinBorder right' src='images/developer/Diplomatv48issue3-4.jpg' />
          <div className="dividerLine"></div>
        </div>
      </div>
      )
  }
})

var AboutPhoto = React.createClass({
  render: function() {
    return(
      <div className="aboutMenu narrowSection">
        <img className="circularPhotoSmall" src="images/KohCamera-Circular.png"/>
        <h2>Koh Terai</h2>
        <h3 className="blue">as a Photographer</h3>
                <p>Hi, I’m Koh and currently study computer science at <a href="http://nyuad.nyu.edu/en/" target="_blank"><b>New York University Abu Dhabi</b></a>.
        Before my life in Abu Dhabi, I have attended St. Mary’s International School in Tokyo, Japan.  I’ve been photographing events for several years now and specialize 
        in environmental portraits and photojournalistic event coverage.  I have also served as the director of photography on film sets and have completed shooting two senior thesis 
        films at university this year.  Recently, a short film that I was the DP for was screened at the Abu Dhabi International Film Festival.  Please do contact me if you have
        any photographic or cinematographic work in mind.  I am interested in exapanding my editorial work.</p>
        <p>
        I’m also an avid <Link to="developer" target="_blank"><b>developer</b></Link> so please do take a look at my other work if you have a chance to. 
        </p>
        <h4>Published By</h4>
        <table className="skillsTable">
          <tr>
            <td><a href="http://www.halleonard.com">Hal Leonard Corporation</a></td>
          </tr>
          <tr>          
            <td><a href="http://www.stripes.com/">Stars and Stripes</a></td>
          </tr>
          <tr>
            <td><a href="http://www.tokyoweekender.com/">Tokyo Weekender</a></td>
          </tr>
          <tr>
            <td><a href="http://www.thenational.ae/">The National</a></td>
          </tr>
          <tr>
            <td><a href="http://www.onyahsa.org/">YMCA Camp Onyahsa</a></td>
          </tr>
        </table>
        <h4>Contact</h4>
        <p className="smallMargin">koh.terai@nyu.edu</p>
        <h4>CV</h4>
        <a href="downloads/CV-Photo.pdf" target="_blank"><p className="smallMargin">view resume</p></a>
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
          <img className='halfWidth right' src='images/photo/portrait-izumi-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-yabui-1.jpg' />
          <img className='halfWidth right' src='images/photo/portrait-yabui-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-KP-1.jpg' />
          <img className='halfWidth right' src='images/photo/portrait-KP-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-grad-1.jpg' />
          <img className='halfWidth right' src='images/photo/portrait-grad-2.jpg' />
        </div>
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-band-1.jpg' />
          <img className='halfWidth right' src='images/photo/portrait-band-2.jpg' />
        </div>
        <img className='fullWidth' src='images/photo/portrait-james-1.jpg' />
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/portrait-JP-1.jpg' />
          <img className='halfWidth right' src='images/photo/portrait-alistair-1.jpg' />
        </div>
      </div>
    )
  }
})

var Georgia = React.createClass({
  render: function() {
    return(
      <div id="georgia">
        <img className='fullWidth' src='images/photo/georgia/georgia-1.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-2.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-3.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-4.jpg' />
        <img className='halfWidth left' src='images/photo/georgia/georgia-5.jpg' />
        <img className='halfWidth right' src='images/photo/georgia/georgia-5-5.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-6.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-7.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-8.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-9.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-10.jpg' />
        <img className='fullWidth' src='images/photo/georgia/georgia-11.jpg' />
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/georgia/georgia-12.jpg' />
          <img className='halfWidth right' src='images/photo/georgia/georgia-13.jpg' />
        </div>
      </div>
    )
  }
})

var Sports = React.createClass({
  render: function() {
    return(
      <div id="sports">
        <img className='fullWidth' src='images/photo/sports/sport-bball-1.jpg' />
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/sports/sport-bball-2.jpg' />
          <img className='halfWidth right' src='images/photo/sports/sport-bball-3.jpg' />
        </div>
        <img className='fullWidth' src='images/photo/sports/sport-wrestling-1.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-swimming-1.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-xc-1.jpg' />
        <div className='halfWidthContainer'>
          <img className='halfWidth left' src='images/photo/sports/sport-tennis-1.jpg' />
          <img className='halfWidth right' src='images/photo/sports/sport-track-1.jpg' />
        </div>
        <img className='fullWidth' src='images/photo/sports/sport-tennis-2.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-tennis-3.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-baseball-1.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-soccer-1.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-soccer-2.jpg' />
        <img className='fullWidth' src='images/photo/sports/sport-baseball-2.jpg' />
      </div>
    )
  }
})

var Cinema = React.createClass({
  render: function() {
    return(
      <div id="portraits">
        <img className='fullWidth' src='images/photo/cinema/return-1.jpg' />
        <img className='fullWidth' src='images/photo/cinema/return-2.jpg' />
        <img className='fullWidth' src='images/photo/cinema/return-3.jpg' />
        <img className='fullWidth' src='images/photo/cinema/return-4.jpg' />
        <p>sorry! cinema page is under construction...</p>
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
  {title: 'Sports', description: 'Voting Service', keyword: 'sports'},
  {title: 'Portraits', description: 'Voting Service', keyword: 'portraits'},
  {title: 'Georgia', description: 'Voting Service', keyword: 'georgia'},
  {title: 'Cinema', description: 'Cinematography', keyword: 'cinema'}
];

//name must be identical to the keyword inside menu keyword
//we use the ProjectDisplay component but with the mode parameter as Photographer
var routes = (
  <Routes location="hash">
    <Route path="/" name="home" handler={SelectMode} />
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
      <Route name="georgia" handler={Georgia} />
      <Route name="sports" handler={Sports} />
      <Route name="cinema" handler={Cinema} />
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