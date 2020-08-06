import React, { Component } from 'react';
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
    const { description, datetime, city, color } = this.state;

    // no description
    if (!description)
      this.setState({error: 'A description is required'});

    // description too long
    else if (description.length > 30)
      this.setState({error: 'Description must be 30 characters or less'});

    // no date
    else if (!datetime)
      this.setState({error: 'A date is required'});

    // everything ok, save
    else {
      this.props.onSave({ description, datetime, city, color })
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
      <div className="c_reminder-editor">
        <p
          className="c_reminder-editor__instruction"
          >{this.state.editing ? 
              'Editing reminder' :
              'Create a new reminder'
          }</p>
        <label
          htmlFor="description"
          className="c_reminder-editor__label"
        >Description</label>
        <textarea
          type="text"
          id="description"
          placeholder="Insert description"
          value={this.state.description}
          className="c_reminder-editor__input"
          onChange={this.handleDescriptionChange} />
        <span
          className="c_reminder-editor__input__note"
          >{`${30 - this.state.description.length}`
        }</span>

        <label
          htmlFor="date"
          className="c_reminder-editor__label"
        >Date & time</label>
        <DateTime 
          id="date"
          value={this.state.datetime}
          onChange={this.handleDateTimeChange} />

        <label
          htmlFor="city"
          className="c_reminder-editor__label"
        >City</label>
        <input
          type="text"
          id="city"
          placeholder="Insert city"
          value={this.state.city}
          className="c_reminder-editor__input"
          onChange={this.handleCityChange} />
        
        <label className="c_reminder-editor__label">Select color</label>
        <div 
          className="c_reminder-editor__input c_reminder-editor__input--color"
          style={{background: this.state.color}}
          onClick={this.toggleColorPicker}>
          {this.state.pickingColor && <SketchPicker 
            color={this.state.color}
            onChange={this.handleColorChange}
          />}
        </div>

        <p>{this.state.error}</p>
        <button
          type="button"
          className="c_reminder-editor__button c_button"
          onClick={this.handleSubmit}
        >{this.state.editing ? 'Update' : 'Create'}</button>
        <button
          type="button"
          className="c_reminder-editor__button c_button"
          onClick={this.handleCancel}
        >Cancel</button>
      </div>
    );
  }
}

export default ReminderEditor;
