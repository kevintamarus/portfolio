import React, { Component } from 'react';
import worlddata from './world';
import { geoMercator, geoPath } from 'd3-geo';
import '../App.css';

export default class WorldMap extends Component {
   render() {
    const projection = geoMercator()
    const pathGenerator = geoPath().projection(projection)
    const countries = worlddata.features
      .map((d,i) => <path
      key={'path' + i}
      d={pathGenerator(d)}
      className='countries'
      />)
    return (
      <svg style={{backgroundColor: '#ffffff'}} width={1000} height={450}>
        {countries}
      </svg>
    )
   }
}