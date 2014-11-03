/*The ContentArea sets the mode state either in Developer or Photographer.
This dictates how the rest of the page loads*/
var ContentArea = React.createClass({
  getInitialState: function() {
    return {
      mode: 'Developer',
      project: 'nyuvote'
    };
  },
  setProject: function(newProject) {
    this.setState({project: newProject});
  },
  render: function() {
    return(
      <div>
        <ProjectsMenu mode={this.state.mode} setProject={this.setProject}/>
        <ProjectsDetails project={this.state.project} />
      </div>
    );
  }
})

/*ProjectsDetails is loaded according to the project state of ContentArea.*/
var ProjectsDetails = React.createClass({
  render: function() {
    var projectDetailHTML = projectDetails[this.props.project];
    console.log(this.props.project);
    console.log(projectDetailHTML);
    return (
      <div dangerouslySetInnerHTML={{__html: projectDetailHTML}}></div>
    )
  }
})

/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({
  getInitialState: function(){
    return {displayProject: false};
  },
  onClick: function(color) {
    this.props.setProject(color)
  },
  isTrue: function() {
    if (this.state.displayProject=='orange') {
          return (<OrangeBox />);
        } else if (this.state.displayProject == 'blue'){
          return (<BlueBox />);
        };
  },
  render: function() {
    if (this.state.mode = 'Developer'){
      var menuList = DeveloperDetails;
    };

    //Each menuList is a dict of {tite: , description:, keyword: }
    return (
      <ul className="menuList">
        <h3>Projects</h3>
        {menuList.map(function(item){
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

/*
      <div>
      <ul>
        <li onClick={this.onClick.bind(this, 'orange')}>NYU Vote</li>
        <li onClick={this.onClick.bind(this, 'blue')}>wellSense</li>
        <li>Student Voice</li>
        <li>Misc Works</li>
        <li>{this.props.mode}</li>
      </ul>
      {this.isTrue()}
      </div>
    );
*/
  }
});


var OrangeBox = React.createClass({
  render: function() {
    var variable = '<div class="orangeBox"></div>';
    return(
      <div dangerouslySetInnerHTML={{__html: variable}}></div>
    );
  }
});

var BlueBox = React.createClass({
  render: function() {
    var variable = '<div class="blueBox"></div>';
    return(
      <div dangerouslySetInnerHTML={{__html: variable}}></div>
    );
  }
});

var DeveloperDetails = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'misccswork'}
];

var projectDetails =
  {nyuvote: '<div>asdifjdsaiofj</div>',
  yalla: "<div class='orangeBox'></div>"};

React.render(
  <ContentArea />, document.getElementById('container')
);