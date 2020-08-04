import React, { Component, Fragment } from 'react';
import DateTime from 'react-datetime';
import { SketchPicker } from 'react-color';

export class ReminderEditor extends Component {
  state = {
    editing: this.props.id >= 0,
    description: this.props.description || '',
    datetime: this.props.datetime || '',
    city: this.props.city || '',
    color: this.props.color || '#fff',
    pickingColor: false,
    error: ''
  }

  // clear inputs
  clearInputs = () => {
    this.setState({   
      description: '',
      datetime: '',
      city: '',
      pickingColor: false,
      error: ''
    })
  }

  handleSubmit = () => {
    // no description
    if (!this.state.description)
      this.setState({error: 'A description is required'});

    // description too long
    else if (this.state.description.length > 30)
      this.setState({error: 'Description must be 30 characters or less'});

    // no date
    else if (!this.state.datetime)
      this.setState({error: 'A date is required'});

    // everything ok, save
    else {
      this.props.onSave(this.state.description, this.state.datetime, this.state.city, this.state.color)
      this.clearInputs();
    }
  }

  handleCancel = () => {
    this.clearInputs();

    if (this.state.editing >= 0)
      this.props.onCancel();
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

  handleColorChange = color => {
    this.setState({ color: color.hex });
  }

  toggleColorPicker = () => {
    this.setState({ pickingColor: ! this.state.pickingColor});
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
        <span>{`${30 - this.state.description.length}`}</span>

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
        
        <label>Color</label>
        <div style={{
          width: '3em',
          height: '1em',
          border: '2px solid black',
          background: this.state.color
        }}></div>
        {this.state.pickingColor && <SketchPicker 
          color={this.state.color}
          onChange={this.handleColorChange}
        />}
        <button
          type="button"
          onClick={this.toggleColorPicker}
        >{this.state.pickingColor ? 'Done' : 'Change color'}</button>

        <p>{this.state.error}</p>
        <button
          type="button"
          onClick={this.handleSubmit}
        >{this.state.editing ? 'Update' : 'Create'}</button>
        <button
          type="button"
          onClick={this.handleCancel}
        >Cancel</button>
      </Fragment>
    );
  }
}

export default ReminderEditor;