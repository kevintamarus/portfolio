import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Projects</a></li>
              <li><a href="badges.html">Volunteer Work</a></li>
              <li><a href="collapsible.html">Music</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}