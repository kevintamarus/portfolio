import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Music from './components/Music';
import Running from './components/Running';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar history={history}/>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/skills' component={Skills}/>
            <Route exact path='/volunteer' component={Volunteer}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/running' component={Running}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
