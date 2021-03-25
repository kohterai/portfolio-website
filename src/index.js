import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render((
     <BrowserRouter>
         <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact={true} path="/" component={App} />
            {/* <ProtectedRoute path="/settings" component={Settings} /> */}
            <ProtectedRoute component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
