import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import { SketchPicker } from 'react-color';

export class ReminderEditor extends Component {
  static propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    datetime: PropTypes.object,
    city: PropTypes.string,
    color: PropTypes.string
  };

  state = {
    editing: this.props.id >= 0,
    description: this.props.description || '',
    datetime: this.props.datetime || '',
    city: this.props.city || '',
    color: this.props.color || '#fff',
    pickingColor: false,
    error: ''
  };

  /**
   * Clears all inputs (except color)
   */
  clearInputs = () => {
    this.setState({   
      description: '',
      datetime: '',
      city: '',
      pickingColor: false,
      error: ''
    })
  };

  /**
   * Validate and submit if everything is good
   */
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

  /**
   * Clears inputs. If editing, cancel and return to creation mode.
   */
  handleCancel = () => {
    this.clearInputs();

    if (this.state.editing >= 0)
      this.props.onCancel();
  }

  /**
   * Update state for description change.
   */
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }

  /**
   * Update state for datetime change.
   */
  handleDateTimeChange = moment => {
    this.setState({ datetime: moment })
  }

  /**
   * Update state for city change.
   */
  handleCityChange = e => {
    this.setState({ city: e.target.value })
  }

  /**
   * Update state for color change.
   */
  handleColorChange = color => {
    this.setState({ color: color.hex });
  }

  /**
   * Toggle visibility of color picker input
   */
  toggleColorPicker = () => {
    this.setState({ pickingColor: ! this.state.pickingColor});
  }

  render() {
    const { editing, description, datetime, 
      city, color, pickingColor, error } = this.state;

    return (
      <div className="c_reminder-editor">
        <p
          className="c_reminder-editor__instruction"
          >{editing ? 
              'Editing reminder' :
              'Create a new reminder'
          }</p>
        <div className="c_reminder-editor__fields">
          <div className="c_reminder-editor__fields__item">
            <label
              htmlFor="description"
              className="c_reminder-editor__label"
            >Description</label>
            <textarea
              type="text"
              id="description"
              placeholder="Insert description"
              value={description}
              className="c_reminder-editor__input"
              onChange={this.handleDescriptionChange} />
            <span
              className="c_reminder-editor__input__note"
              >{`${30 - description.length}`
            }</span>
          </div>

          <div className="c_reminder-editor__fields__item">
            <label
              htmlFor="date"
              className="c_reminder-editor__label"
            >Date & time</label>
            <DateTime 
              id="date"
              value={datetime}
              onChange={this.handleDateTimeChange} />
            </div>

          <div className="c_reminder-editor__fields__item">
            <label
              htmlFor="city"
              className="c_reminder-editor__label"
            >City</label>
            <input
              type="text"
              id="city"
              placeholder="Insert city"
              value={city}
              className="c_reminder-editor__input"
              onChange={this.handleCityChange} />
            </div>
          
          <div className="c_reminder-editor__fields__item">
            <label className="c_reminder-editor__label">Select color</label>
            <div 
              className="c_reminder-editor__input c_reminder-editor__input--color"
              style={{background: color}}
              onClick={this.toggleColorPicker}>
              {pickingColor && <SketchPicker 
                color={color}
                onChange={this.handleColorChange}
              />}
            </div>
          </div>
        </div>

        <p>{error}</p>
        <button
          type="button"
          className="c_reminder-editor__button c_button"
          onClick={this.handleSubmit}
        >{editing ? 'Update' : 'Create'}</button>
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
