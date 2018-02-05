import React, {Component} from 'react';
import WorldMap from './WorldMap';

export default class Home extends Component {
  render() {
    return (
      <div className="center-align">
        <h1>Home Page</h1>
        <WorldMap/>
      </div>
    );
  }
}