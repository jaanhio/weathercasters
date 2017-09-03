import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class WeatherList extends Component{

  renderWeather(data){
    const name = data.city.name;
    const temps = data.list.map(weather => weather.main.temp -273.15);
    const pressure = data.list.map(weather => weather.main.pressure);
    const humidity = data.list.map(weather => weather.main.humidity);

    return(
      <TableRow key={name}>
        <TableRowColumn className="countryName">{name}</TableRowColumn>
        <TableRowColumn><Chart data={temps} units="C" color="orange"/></TableRowColumn>
        <TableRowColumn><Chart data={pressure} units="hPa" color="red"/></TableRowColumn>
        <TableRowColumn><Chart data={humidity} units="%" color="blue"/></TableRowColumn>
      </TableRow>
    )
  }

  render(){
    return(
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow hoverable={true}>
            <TableHeaderColumn>Country</TableHeaderColumn>
            <TableHeaderColumn>Temperature</TableHeaderColumn>
            <TableHeaderColumn>Pressure</TableHeaderColumn>
            <TableHeaderColumn>Humidity</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {this.props.weather.map(this.renderWeather)}
        </TableBody>
      </Table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather: weather};
}

export default connect(mapStateToProps)(WeatherList);
