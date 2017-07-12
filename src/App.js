import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Menu from './Menu'
import Catalog from './ThumbnailCatalog'
import projectList from './ProjectList'

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
  }
]

const Main = () => (
  <Router>
    <div style={{ maxWidth: '1100px',
                  margin: 'auto' }}>

      <Route path="/" component={Menu}/>
      <div id="horizontal-line"></div>

      <div id="contentContainer" style={{ flex: 1,
                                          paddingLeft: '200px',
                                          paddingTop: '50px'}}>
        <div>
          {routes.map((route, index) => (
            <Route
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
                            <Route
                              key={index}
                              path={project.path}
                              exact={true}
                              component={project.main}
                            />
              ))}
              </div>
          ))}
        </div>

      </div>
    </div>
  </Router>
)

export default Main