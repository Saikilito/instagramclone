import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './home'
import Login from './login'

const Routes = () => (
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>  
          </Switch>
      </Router>
)

export default Routes;

