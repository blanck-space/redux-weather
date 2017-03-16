import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class Map extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    new google.maps.Map(this.refs.mapDiv,{
      zoom: 12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return(
      <div ref="mapDiv"/>
    );
  }
}
