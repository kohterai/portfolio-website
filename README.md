Project Based Online Portfolio
========

The website is geared towards project based portfolios.  It is built with [Facebook React](http://facebook.github.io/react/) using their [Create React App](https://github.com/facebookincubator/create-react-app) project.

This is a complete redesign (code and experience) from the v1 Portfolio Website.

<h2>Development/Deployment</h2>

To start a local server, run `npm start`

To deploy to github pages, run `npm run deploy`

Since this project is based on Create React App, more information about deploying
can be found on their [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

<h2>Code Structure</h2>

All relevant code is under the src folder. In order to create a new project, there are 3 steps.
Each project is its own react component.

<ol>
	<li>Create a new Javascript file to hold our component. You can use `src/Projects/project-template.js` as a template.</li>
	<li>In `/src/ProjectList.js` import newly added component, and thumbnail images`</li>
	<li>Inside the `projectList` array, find the relevant `type` field and insert project and thumbnails accoriding to projectList structure</li>
</ol>

<h2>projectList structure</h2>

The `projectList` array inside `/src/ProjectList.js` is the central catalog for all projects that get loaded into the thumbnail page. Each project is its own react component, and is referenced inside `/src/ProjectList.js`.


| Field        | Value           | Description  |
| ------------- |:-------------:| -----:|
| title      | String | Title of project |
| caption      | Image path  |   Caption for project |
| path | String      |    Desired path/URL for the project |
| main | React Component      |    Reference to the project component |

For `longThumb`, there is a `true` and `false` mode. When `longThumb` is `true`, in the
thumbnail page, one project with get enough space to fill one horizontal row with its own
thumbnail images. On Desktop, it will fill one row with three images of its own project.
In this case, thumbails must be referenced as `thumbnail1`, `thumbnail2`, and `thumbnail3`.
If `false`, up to 3 projects will fill one row.