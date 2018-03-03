import React, {Component} from 'react';

import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-container">
        <input className="input" type="text" placeholder="Search Quotes"/>
        <button className="button">Test Button</button>
        </div>
      </div>
    );
  }
}