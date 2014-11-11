var React = require('react');


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
        React.createElement(SkillsDetail, null), 
        React.createElement("div", {id: "projectElements"}, 
          React.createElement(ProjectsMenu, {menuList: menuList, setProject: this.setProject}), 
          React.createElement(ProjectsDetails, {project: 'yalla'})
        )
      )
    );
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

var SkillsDetail = React.createClass({displayName: 'SkillsDetail',
  render: function() {
    return(
      React.createElement("div", {className: "skillTable"}, 
        React.createElement("h3", null, "Skills"), 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, "InDesign"), 
            React.createElement("td", null, "Photoshop"), 
            React.createElement("td", null, "Illustrator"), 
            React.createElement("td", null, "Keynote")
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Python"), 
            React.createElement("td", null, "MongoDB"), 
            React.createElement("td", null, "C++"), 
            React.createElement("td", null, "C"), 
            React.createElement("td", null, "HTML"), 
            React.createElement("td", null, "CSS")
          )
        )
      )
    )
  }
})

/*Once ProjectsDetails is rendered, our default html is loaded in..*/
var ProjectsDetails = React.createClass({displayName: 'ProjectsDetails',
  render: function() {
    return (
      React.createElement("div", {className: "projectDetail"})
    )
  },
  componentDidMount: function(){
    {$(".projectDetail").load('projectsHTML/'+'nyuvote'+'.html')}
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
  React.createElement(ContentArea, null), document.getElementById('container')
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