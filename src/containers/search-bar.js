import React, { Component } from 'react';
import { connect } from 'react-redux';
import getWeather from '../actions/index.js';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ""
    }
    //this._onType = this._onType.bind(this) (if using commented out way of defining _onType f'n)
  }
  // _onType(evt){
  //   console.log(evt.target.value)
  //   this.setState({
  //     city: evt.target.value
  //   });
  // }
  render() {
    return (
      <div>
        <form onSubmit={this._formSubmit} className="input-group">
          <input
            placeholder="Type any American city's name"
            type="text"
            className="form-control"
            value={this.state.city}
            onChange={this._onType}
            />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }

  _onType = (evt)=>{
    this.setState({
      city: evt.target.value
    });
  }

  _formSubmit = (evt)=>{
    evt.preventDefault();
    this.setState({
      city: ""
    });
    this.props.getWeather(this.state.city)
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
