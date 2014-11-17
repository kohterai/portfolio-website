var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

/*The ContentArea sets the mode state either in Developer or Photographer.
This dictates how the rest of the page loads*/
var ContentArea = React.createClass({displayName: 'ContentArea',
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
      React.createElement("div", null, 
        React.createElement(Header, {mode: this.state.mode, description: modeDescription}), 
        React.createElement("div", {id: "projectElements"}, 
          React.createElement(ProjectsMenu, {menuList: menuList, setProject: this.setProject})
        ), 
        React.createElement(this.props.activeRouteHandler, null)
      )
    );
  }
})

var routes = (
  React.createElement(Routes, {location: "hash"}, 
    React.createElement(Route, {path: "/", handler: ContentArea}, 
      React.createElement(Route, {path: "inbox", name: "inbox", handler: TestDiv}), 
      React.createElement(Route, {path: "calendar", name: "calendar", handler: TestDiv2}, 
        React.createElement(Route, {path: "3", name: "calendar3", handler: TestDiv3})
      )
    )
  )
);


var TestDiv = React.createClass({displayName: 'TestDiv',
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("p", null, "Hello world I am here")
      )
      )
  }
})

var Header = React.createClass({displayName: 'Header',
  render: function() {
    return(
      React.createElement("div", {className: "header"}, 
        React.createElement("div", {id: "kohTitle"}, "KOH TERAI"), React.createElement("div", {id: "modeTitle"}, "as a ", this.props.mode), 
        React.createElement("p", {id: "modeDescription"}, this.props.description)
      )
      )
  }
})

/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({displayName: 'ProjectsMenu',
  onClick: function(color) {
    this.props.setProject(color)
  },
  render: function() {
    //Each menuList is a dict of {tite: , description:, keyword: }
    return (
      React.createElement("ul", {className: "menuList"}, 
        React.createElement("h3", null, "Projects"), 
        this.props.menuList.map(function(item){
          return (
            React.createElement("li", {key: item['keyword'], className: "menuItem", onClick: this.onClick.bind(this, item['keyword'])}, 
              React.createElement("h4", null, item['title']), 
              React.createElement("h5", null, item['description'])
            )
            );
          }, this)
        
      )
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
  routes, document.getElementById('container')
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