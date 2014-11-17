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

        React.createElement(Link, {to: "developer"}, 
          React.createElement("img", {className: "circularPhoto", src: "images/KohApple-Circular.png"}), 
          React.createElement("h2", {className: "modeLabel"}, "product designer")
        ), 

        React.createElement(Link, {to: "photographer"}, 
          React.createElement("img", {className: "circularPhoto", src: "images/KohCamera-Circular.png"}), 
          React.createElement("h2", {className: "modeLabel"}, "photographer")
        )
      )
    )
  }
});


//In charge of the projects menubar and loading projects
var ProjectDisplay = React.createClass({displayName: 'ProjectDisplay',
  getInitialState: function() {
    return {
      mode: this.props.mode,
    };
  },
  render: function() {
    //which menuList to send into the menu is decided here
    if (this.state.mode == 'Developer'){
      var menuList = DeveloperDetails
    };
    return(
      React.createElement("div", null, 
        React.createElement("div", {id: "projectElements"}, 
          React.createElement(ProjectsMenu, {menuList: menuList, setProject: this.setProject}), 
          React.createElement("div", {className: "projectDetail"}, 
            React.createElement(this.props.activeRouteHandler, null)
          )
        )
      )
    );
  }
})


/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({displayName: 'ProjectsMenu',
  render: function() {
    //Each menuList is a dict of {tite: , description:, keyword: }
    //item['description'] to print out desciption as well
    return (
      React.createElement("ul", {className: "menuList"}, 
        React.createElement("div", null, "Koh Terai"), 
        React.createElement("h3", null, "Projects"), 
        this.props.menuList.map(function(item){
          return (
            React.createElement(Link, {to: item['keyword']}, 
              React.createElement("li", {key: item['keyword'], className: "menuItem"}, 
              React.createElement("h4", null, item['title'])
              )
            )  
            );
          }, this)
        
      )
    )
  }
});

var NYUVote = React.createClass({displayName: 'NYUVote',
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h2", null, "NYU VOTE"), 
        React.createElement("p", null, "NYU Vote is an open source live voting platform designed to be the union of capability and simplicity. It has an ultra simple user-facing ballot interface, as well as a minimilistic admin interface.  I lead the design and coded the front-end for the user.  The target audience was 20,000 students from NYU New York, Abu Dhabi, and Shanghai collectively."), 
        React.createElement("img", {className: "fullWidth", src: "images/VoteHome.png"}), 
        React.createElement("img", {className: "halfWidth thinBorder", src: "images/VoteMobile-1.png"}), 
        React.createElement("img", {className: "halfWidth thinBorder", src: "images/VoteMobile-2.png"}), 
        React.createElement("img", {className: "fullWidth thinBorder", src: "images/VoteBallot.png"}), 
        React.createElement("div", {className: "center"}, 
          React.createElement("a", {className: "button", href: "https://vote.nyuapps.com/", target: "_blank"}, React.createElement("i", {className: "fa fa-laptop"}), React.createElement("pre", null, "   View Website")), 
          React.createElement("a", {className: "button", href: "https://github.com/hackAD/nyu-vote", target: "_blank"}, React.createElement("i", {className: "fa fa-code"}), "Examine Code")
        )
      )
    )
  }
})


var Georgia = React.createClass({displayName: 'Georgia',
  render: function() {
    return(
      React.createElement("p", null, "Yay we are isnide of Georgia")
    )
  }
})

var DeveloperDetails = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'miscswork'}
];


//name must be identical to the keyword inside menu keyword
//we use the ProjectDisplay component but with the mode parameter as Photographer
var routes = (
  React.createElement(Routes, {location: "hash"}, 
    React.createElement(Route, {path: "/", handler: SelectMode}), 
    React.createElement(Route, {path: "/dev", name: "developer", mode: "Developer", handler: ProjectDisplay}, 
      React.createElement(Route, {name: "nyuvote", handler: NYUVote}), 
      React.createElement(Route, {name: "yalla", handler: NYUVote}), 
      React.createElement(Route, {name: "wellsense", handler: NYUVote}), 
      React.createElement(Route, {name: "studentvoice", handler: NYUVote}), 
      React.createElement(Route, {name: "miscswork", handler: NYUVote})
    ), 
    React.createElement(Route, {path: "/photo", name: "photographer", mode: "Photographer", handler: ProjectDisplay}, 
      React.createElement(Route, {name: "georgia", handler: Georgia})
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