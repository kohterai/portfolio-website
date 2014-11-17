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
        React.createElement(Header, {mode: this.state.mode, description: modeDescription}), 
        React.createElement("div", {id: "projectElements"}, 
          React.createElement(ProjectsMenu, {menuList: menuList, setProject: this.setProject})
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