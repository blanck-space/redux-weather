import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from '../components/sparklines';
import { Map } from '../components/maps'
class Table extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <td>
              City
            </td>
            <td>
            Temperature
            </td>
            <td>
              Humidity
            </td>
            <td>
              Pressure
            </td>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderTableData)}
        </tbody>
      </table>
    );
  }

  _renderTableData = (cityData)=>{
    let name = cityData.city.name;
    let tempData = cityData.list.map((item)=>{
      return item.main.temp
    });
    let pressureData = cityData.list.map((item)=>{
      return item.main.pressure
    });
    let humidityData = cityData.list.map((item)=>{
      return item.main.humidity
    });
    return(
      <tr key={name}>
        <td><span>{name}</span><Map lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
        <td><Graph data={tempData} color="pink" units="C"/></td>
        <td><Graph data={humidityData} color="blue" units="%"/></td>
        <td><Graph data={pressureData} color="black" units="hPa"/></td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(Table);
