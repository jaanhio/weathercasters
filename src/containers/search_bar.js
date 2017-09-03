import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {fetchWeather} from '../actions/action_index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
    {/*<input placeholder="Search" value={this.state.term} onChange={this.onInputChange}/>*/}

      <TextField hintText="Get your weather forecast!" value={this.state.term} onChange={this.onInputChange} className="textField" />
      {/*<button type="submit">Search</button>*/}
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
