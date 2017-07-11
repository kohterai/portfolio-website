import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Markdown from 'react-markdown'

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
    <div style={{ display: 'flex' }}>
      <Menu />

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        <div>
          {projectList.map((projectList, index) => (
              <div>
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