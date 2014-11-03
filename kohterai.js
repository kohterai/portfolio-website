/*The ContentArea sets the mode state either in Developer or Photographer.
This dictates how the rest of the page loads*/
var ContentArea = React.createClass({
  getInitialState: function() {
    return {mode: 'Developer'};
  },
  render: function() {
    return(
      <div>
        <ProjectsMenu mode={this.state.mode} />
      </div>
    );
  }
})

var ProjectsMenu = React.createClass({
  getInitialState: function(){
    return {displayProject: false};
  },
  onClicker: function(color) {
    this.setState({displayProject: color});
  },
  isTrue: function() {
    if (this.state.displayProject=='orange') {
          return (<OrangeBox />);
        } else if (this.state.displayProject == 'blue'){
          return (<BlueBox />);
        };
  },
  render: function() {
    return(
      <div>
      <ul>
        <li onClick={this.onClicker.bind(this, 'orange')}>NYU Vote</li>
        <li onClick={this.onClicker.bind(this, 'blue')}>wellSense</li>
        <li>Student Voice</li>
        <li>Misc Works</li>
        <li>{this.props.mode}</li>
      </ul>
      {this.isTrue()}
      </div>
    );
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

var PROJECTS = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'misccswork'}
];

React.render(
  <ContentArea />, document.getElementById('container')
);