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
      <div className="selectMode">
        <h1 id="modeSelectTitle">KOH TERAI</h1>

        <Link to="developer">
          <img className="circularPhoto" src="images/KohApple-Circular.png" />
          <h2 className="modeLabel">product designer</h2>
        </Link>

        <Link to="photographer">
          <img className="circularPhoto" src="images/KohCamera-Circular.png" />
          <h2 className="modeLabel">photographer</h2>
        </Link>
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
  render: function() {
    //which menuList to send into the menu is decided here
    if (this.state.mode == 'Developer'){
      var menuList = DeveloperDetails
    };
    return(
      <div>
        <div id="projectElements">
          <ProjectsMenu menuList={menuList} setProject={this.setProject}/>
          <this.props.activeRouteHandler/>
        </div>
      </div>
    );
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
        <h3>Projects</h3>
        {this.props.menuList.map(function(item){
          return (
            <li key={item['keyword']} className="menuItem">
              <Link to={item['keyword']}>
                <h4>{item['title']}</h4>
              </Link>
            </li>
            );
          }, this)
        }
      </ul>
    )
  }
});

var NYUVote = React.createClass({
  render: function() {
    return(
      <p>Yay we are isnide of Yalla</p>
    )
  }
})


var Georgia = React.createClass({
  render: function() {
    return(
      <p>Yay we are isnide of Georgia</p>
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
  <Routes location="hash">
    <Route path="/" handler={SelectMode} />
    <Route path="/dev" name="developer" mode={"Developer"} handler={ProjectDisplay}>
      <Route name="nyuvote" handler={NYUVote} />
      <Route name="yalla" handler={NYUVote} />
      <Route name="wellsense" handler={NYUVote} />
      <Route name="studentvoice" handler={NYUVote} />
      <Route name="miscswork" handler={NYUVote} />
    </Route>
    <Route path="/photo" name="photographer" mode={"Photographer"} handler={ProjectDisplay}>
      <Route name="georgia" handler={Georgia} />
    </Route>
  </Routes>
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