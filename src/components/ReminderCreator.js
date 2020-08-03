import React, { Component, Fragment } from 'react';
import DateTime from 'react-datetime';

export class ReminderCreator extends Component {
  state = {
    description: this.props.text || '',
    datetime: this.props.datetime || '', 
    city: this.props.city || '' 
  }

  handleSubmit = e => {
    this.props.onSave(this.state.description, this.state.datetime, this.state.city)
    // clear inputs
    this.setState({   
      description: '',
      datetime: '',
      city: ''
    })
  }

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }

  handleDateTimeChange = moment => {
    this.setState({ datetime: moment })
  }

  handleCityChange = e => {
    this.setState({ city: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <label for="description">Description</label>
        <textarea
          type="text"
          id="description"
          placeholder="Insert description"
          value={this.state.description}
          onChange={this.handleDescriptionChange} />

        <label for="date">Date</label>
        <DateTime 
          id="date"
          value={this.state.datetime}
          onChange={this.handleDateTimeChange} />

        <label for="city">City</label>
        <input
          type="text"
          id="city"
          placeholder="Insert city"
          value={this.state.city}
          onChange={this.handleCityChange} />

        <button
          type="button"
          onClick={this.handleSubmit}
        >New reminder</button>
      </Fragment>
    );
  }
}

export default ReminderCreator;
