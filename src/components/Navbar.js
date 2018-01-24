import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const {history} = this.props;
    return (
      <div>
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a className="brand-logo right">Home</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a onClick={() => history.push('/')}>Home</a></li>
              <li><a onClick={() => history.push('/projects')}>Projects</a></li>
              <li><a onClick={() => history.push('/skills')}>Skills</a></li>
              <li><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></li>
              <li><a onClick={() => history.push('/music')}>Music</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}