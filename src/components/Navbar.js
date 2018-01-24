import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const {history} = this.props;
    return (
      <div className="navbar-fixed">
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo right" style={{cursor:'pointer'}} onClick={() => history.push('/')}>Home</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse" onClick={() => console.log('hamburger')}><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a onClick={() => history.push('/projects')}>Projects</a></li>
              <li><a onClick={() => history.push('/skills')}>Technical Skills</a></li>
              <li><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></li>
              <li><a onClick={() => history.push('/music')}>Music</a></li>
            </ul>
            <ul id="mobile-demo" className="side-nav">
              <li><a onClick={() => history.push('/projects')}>Projects</a></li>
              <li><a onClick={() => history.push('/skills')}>Technical Skills</a></li>
              <li><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></li>
              <li><a onClick={() => history.push('/music')}>Music</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}