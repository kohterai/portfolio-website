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
      var menuList = DeveloperDetails;
    };
    return(
      <div>
        <SkillsDetail />
        <div id="projectElements">
          <ProjectsMenu menuList={menuList} setProject={this.setProject}/>
          <ProjectsDetails project={'yalla'} />
        </div>
      </div>
    );
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

/*ProjectsDetails is loaded according to the project state of ContentArea.*/
var ProjectsDetails = React.createClass({
  render: function() {
    var projectDetailHTML = projectDetails[this.props.project];
    console.log(this.props.project);
    console.log(projectDetailHTML);
    return (
      <div className='projectDetail' dangerouslySetInnerHTML={{__html: projectDetailHTML}}></div>
    )
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

var projectDetails =
  {nyuvote: "",
  yalla: "<div class='orangeBox'></div>"};

React.render(
  <ContentArea />, document.getElementById('container')
);