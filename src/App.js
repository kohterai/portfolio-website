import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Menu from './Menu'
import Catalog from './ThumbnailCatalog'
import projectList from './ProjectList'
import './App.css';
import ScrollToTopRoute from './ScrollToTopRoute';
import ReactPlayer from 'react-player'
import Footer from './Footer'
import About from './about/About'



// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    main: Catalog
  },
  { path: '/projects',
    exact: true,
    main: Catalog
  },
  { path: '/about',
    exact: true,
    main: About
  }
]


const Main = () => (
  // Minimal version
  // <div id="welcome-message">
  //   <div><b>Koh Terai</b></div>
    
  //   <div><a id="welcome-email" href="mailto:koh.terai@gmail.com">koh.terai@gmail.com</a></div>
  //   {/* <br></br>
  //   <div>Current Projects:</div>
  //   <div>Designing Financial inclusion in emerging markets</div>
  //   <div>Designing healthcare in Singapore</div> 
  //   <br></br>
  //   <div>Past Projects:</div>
  //   <div>Burj Shadow</div>
  //   <div>Grand Bouquet</div>
  //   <div>Berita Harian</div> */}



  // </div>

  // Full version
  <Router>
      <div id ="main-container">

        <ScrollToTopRoute path="/" component={Menu}/>

        <div id="content-container">
          <div>
            {routes.map((route, index) => (
              <ScrollToTopRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
          <div>
            {projectList.map((projectList, index) => (
                <div key={index}>
                {projectList.projects.map((project, index) => (
                              <ScrollToTopRoute
                                key={index}
                                path={project.path}
                                exact={true}
                                component={project.main}
                              />
                ))}
                </div>
            ))}
          </div>
        <Footer />

        </div>

      </div>
  </Router>
)

         // <Route exact path="/" render={() => 
         //  <div>
         //    <div className="thumbnailCategoryTitle" style={{
         //      textTransform: 'uppercase',
         //      fontWeight: '600',
         //      fontSize: '1.2em',
         //      marginBottom: '20px'}}>
         //      <div>Cinematography</div>
         //    </div>

          //   <div className="project-video-wrapper">
          //     <ReactPlayer className="project-video" url='https://vimeo.com/201632847' width='100%' height='100%'/>
          //   </div>
          // </div>
         //  }/>


export default Main