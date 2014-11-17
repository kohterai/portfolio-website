var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;




//Landing screen where user selects which mode.  Clicking mode will switch out components w/ appropiate mode.
var SelectMode = React.createClass({displayName: 'SelectMode',
  render: function() {
    return(
      React.createElement("div", {className: "selectMode"}, 
        React.createElement("h1", {id: "modeSelectTitle"}, "KOH TERAI"), 
        React.createElement("img", {className: "circularPhoto", src: "images/KohApple-Circular.png"}), 
        React.createElement("h2", {className: "modeLabel"}, "photographer"), 
        React.createElement("img", {className: "circularPhoto", src: "images/KohCamera-Circular.png"}), 
        React.createElement("h2", {className: "modeLabel"}, "product designer")
      )
    )
  }
});




//In charge of the projects menubar and 
var ProjectDisplay = React.createClass({displayName: 'ProjectDisplay',
  //set here the default project and mode to be loaded
  getInitialState: function() {
    return {
      mode: 'Fox',
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
      return(
      React.createElement("div", null, 
        React.createElement(Header, {mode: this.state.mode, description: modeDescription}), 
        React.createElement("div", {id: "projectElements"}, 
          React.createElement(ProjectsMenu, {menuList: menuList, setProject: this.setProject})
        )
      )
      );
    };
    if (this.state.mode == 'Fox'){
      var menuList = DeveloperDetails
      var modeDescription = "I love foxes"
      return(
      React.createElement("div", null, 
        React.createElement("h1", null, "Foxes arethe best")
      )
      );
    };
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

var routes = (
  React.createElement(Routes, {location: "hash"}, 
    React.createElement(Route, {path: "/", handler: SelectMode}
    )
  )
);


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