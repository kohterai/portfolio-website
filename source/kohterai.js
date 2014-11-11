var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

/*The ContentArea sets the mode state either in Developer or Photographer.
This dictates how the rest of the page loads*/
var ContentArea = React.createClass({
  //set here the default project and mode to be loaded
  getInitialState: function() {
    return {
      mode: 'Developer',
    };
  },
  setProject: function(newProject) {
    {$(".projectDetail").load('projectsHTML/'+newProject+'.html')}
    // this.setState({project: newProject});
  },
  render: function() {
    //which menuList to send into the menu is decided here
    if (this.state.mode == 'Developer'){
      var menuList = DeveloperDetails
      var modeDescription = "I am currently studying computer science at New York University Abu Dhabi.  I've been\
      keen on technology since a young age and even made a presentation about SMS Technology at an apple store when I was in 6th grade."
    };
    return(
      <div>
        <Header mode={this.state.mode} description={modeDescription} />
        <SkillsDetail />
        <div id="projectElements">
          <ProjectsMenu menuList={menuList} setProject={this.setProject}/>
          <ProjectsDetails project={'yalla'} />
        </div>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
})

var routes = (
  <Routes location="history">
    <Route name="contentArea" path="" handler={ContentArea}>
      <Route name="yalla" handler={}
  )

var Header = React.createClass({
  render: function() {
    return(
      <div className='header'>
        <div id='kohTitle'>KOH TERAI</div><div id='modeTitle'>as a {this.props.mode}</div>
        <p id='modeDescription'>{this.props.description}</p>
      </div>
      )
  }
})

var SkillsDetail = React.createClass({
  render: function() {
    return(
      <div className="skillTable">
        <h3>Skills</h3>
        <table>
          <tr>
            <td>InDesign</td>
            <td>Photoshop</td>
            <td>Illustrator</td>
            <td>Keynote</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>MongoDB</td>
            <td>C++</td>
            <td>C</td>
            <td>HTML</td>
            <td>CSS</td>
          </tr>
        </table>
      </div>
    )
  }
})

/*Once ProjectsDetails is rendered, our default html is loaded in..*/
var ProjectsDetails = React.createClass({
  render: function() {
    return (
      <div className='projectDetail'></div>
    )
  },
  componentDidMount: function(){
    {$(".projectDetail").load('projectsHTML/'+'nyuvote'+'.html')}
  }
})

/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({
  onClick: function(color) {
    this.props.setProject(color)
  },
  render: function() {
    //Each menuList is a dict of {tite: , description:, keyword: }
    return (
      <ul className="menuList">
        <h3>Projects</h3>
        {this.props.menuList.map(function(item){
          return (
            <li key={item['keyword']} className="menuItem" onClick={this.onClick.bind(this, item['keyword'])}>
              <h4>{item['title']}</h4>
              <h5>{item['description']}</h5>
            </li>
            );
          }, this)
        }
      </ul>
    )
  }
});


var DeveloperDetails = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'misccswork'}
];

React.render(
  <ContentArea />, document.getElementById('container')
);

$(document).ready(function() {  
 // check where the shoppingcart-div is  
 var offset = $('.menuList').offset();
 console.log(offset)

 $(window).scroll(function () {  
   var scrollTop = $(window).scrollTop(); // check the visible top of the browser  

   if (offset.top<scrollTop) $('.menuList').addClass('fixed');  
   else $('.menuList').removeClass('fixed');  
  });  
});