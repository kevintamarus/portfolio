import React, {Component} from 'react';
import BarChart from './BarChart';
import WorldMap from './WorldMap';

export default class Home extends Component {
  render() {
    return (
      <div className="center-align">
        <h1>Home Page</h1>
        <BarChart data={[5,10,1,3]} size={[500,500]} />
        <div>
          <WorldMap/>
        </div>
      </div>
    );
  }
}